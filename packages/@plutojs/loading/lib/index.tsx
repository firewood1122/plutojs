import React from 'react';
import Modal from '~/core/modal/lib';
const style = require('./index.less');

let loading = null;
const getModal = (content: React.ReactNode, zIndex: number) => {
  loading = Modal.popup({
    children: content,
    isOpened: true,
    isMask: false,
    isLock: false,
    closeOnClickOverlay: false,
    zIndex,
    onHide: () => { },
  });
};

export default {
  show: (text: string = '加载中', zIndex: number = 999) => {
    const content = (
      <div className={style.container}>
        <div className={style.img} />
        <div className={style.info}>{text}</div>
      </div>
    );
    if (loading) {
      loading.destroy();
      loading = null;
    }
    getModal(content, zIndex);
  },
  hide: () => {
    if (loading) {
      loading.destroy();
      loading = null;
    }
  },
};
