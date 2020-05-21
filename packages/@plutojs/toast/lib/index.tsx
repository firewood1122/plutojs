import React, { Component } from 'react';
import Modal from '@plutojs/modal';
const style = require('./index.less');

export default {
  info: (text: string, duration: number = 3000) => {
    const { destroy } = Modal.popup({
      children: <div className={style.info}>{text}</div>,
      isOpened: true,
      onHide: () => { destroy(); },
      closeOnClickOverlay: false,
    });

    // 定时关闭
    setTimeout(() => {
      destroy();
    }, duration);
  }
}