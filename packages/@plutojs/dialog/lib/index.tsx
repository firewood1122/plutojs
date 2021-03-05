import React from 'react';
import Modal from '~/core/modal/lib';
const style = require('./index.less');

let modal = null;

interface PropsType {
  isMask?: boolean,
  closeOnClickOverlay?: boolean,
}

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
const getModal = (content: React.ReactNode, options: PropsType = {}) => {
  const opts = Object.assign({
    children: content,
    isOpened: true,
    isMask: true,
    isLock: true,
    closeOnClickOverlay: true,
    onHide: () => {
      destroy();
    },
  }, options);
  modal = Modal.popup(opts);
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
  alertCustomize: (customize: Function, options: PropsType = {}) => {
    const content = customize && customize(destroy);
    if (!content) return;
    destroy();
    getModal(content, options);
  },
  confirm: (text: string, confirm: Function, cancelText: string = '取消', confirmText = '确定', cancel = () => { }) => {
    const content = (
      <div className={style.container}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div className={style.cancelBtn} onClick={() => { cancel(); destroy(); }}>{cancelText}</div>
          <div className={style.confirmBtn} onClick={() => { confirm(); destroy(); }}>{confirmText}</div>
        </div>
      </div>
    );
    destroy();
    getModal(content);
  }
};