import React from "react";
import Modal from "~/core/modal/lib";
import style from "./index.less";

let loading = null;
const getModal = (content: React.ReactNode, zIndex: number) => {
  loading = Modal.popup({
    children: content,
    isOpened: true,
    isMask: false,
    isLock: false,
    closeOnClickOverlay: false,
    zIndex,
    onHide: () => {
      // do nothing
    },
  });
};

export default {
  show: (text = "加载中", zIndex = 999) => {
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
