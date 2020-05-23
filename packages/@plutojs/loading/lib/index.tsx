import React from 'react';
import Modal from '@plutojs/modal';
const style = require('./index.less');

let loading = null;
const getModal = (content: React.ReactNode) => {
  loading = Modal.popup({
    children: content,
    isOpened: true,
    isMask: false,
    isLock: false,
    closeOnClickOverlay: false,
    onHide: () => { },
  });
};

export default {
  show: (text: string = '加载中') => {
    const content = (
      <div className={style.container}>
        <div className={style.img}></div>
        <div className={style.info}>{text}</div>
      </div>
    );
    if (loading) {
      loading.destroy();
      loading = null;
    }
    getModal(content);
  },
  hide: () => {
    if (loading) {
      loading.destroy();
      loading = null;
    }
  }
};