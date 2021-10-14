import React from "react";
import Modal from "~/core/modal/lib";
import style from "./index.less";

const getModal = (content: React.ReactNode, duration: number) => {
  const { destroy } = Modal.popup({
    children: content,
    isOpened: true,
    isMask: false,
    isLock: false,
    closeOnClickOverlay: false,
    onHide: () => {
      destroy();
    },
  });

  // 定时关闭
  setTimeout(() => {
    destroy();
  }, duration);
};

export default {
  info: (text: string, duration = 2000) => {
    getModal(<div className={style.info}>{text}</div>, duration);
  },
  error: (err: Error, duration = 2000) => {
    getModal(<div className={style.info}>{err.toString()}</div>, duration);
  },
};
