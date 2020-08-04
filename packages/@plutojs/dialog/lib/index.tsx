import React from 'react';
import Modal from '~/core/modal/lib';
const style = require('./index.less');

let modal = null;

/**
 * 销毁对话框
 */
const destroy = () => {
  if (modal) {
    modal.destroy();
    modal = null;
  }
};

/**
 * 显示对话框
 *  
 * @param content 
 */
const getModal = (content: React.ReactNode) => {
  modal = Modal.popup({
    children: content,
    isOpened: true,
    isMask: true,
    isLock: true,
    closeOnClickOverlay: true,
    onHide: () => {
      destroy();
    },
  });
};

export default {
  alert: (text: string, confirm: Function, confirmText = '确定') => {
    const content = (
      <div className={style.container}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div className={style.alertBtn} onClick={() => { confirm(); destroy(); }}>{confirmText}</div>
        </div>
      </div>
    );
    destroy();
    getModal(content);
  },
  confirm: (text: string, confirm: Function, cancelText: string = '取消', confirmText = '确定') => {
    const content = (
      <div className={style.container}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div className={style.cancelBtn} onClick={destroy}>{cancelText}</div>
          <div className={style.confirmBtn} onClick={() => { confirm(); destroy(); }}>{confirmText}</div>
        </div>
      </div>
    );
    destroy();
    getModal(content);
  }
};