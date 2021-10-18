import React from "react";
import Modal from "~/core/modal/lib";
import style from "./index.less";

export interface AlertOptions {
  text: string;
  customizeClass?: string;
  confirmText?: string;
  confirm: () => void;
}
export interface AlertCustomizeOptions {
  isMask?: boolean;
  closeOnClickOverlay?: boolean;
}
export interface ConfirmOptions {
  text: string;
  customizeClass?: string;
  confirmText: string;
  cancelText: string;
  confirm: () => void;
  cancel: () => void;
}
const emptyFunction = () => {
  // do nothing
};

export default class {
  static modal = null;

  /**
   * 销毁对话框
   */
  static destroy() {
    if (this.modal) {
      this.modal.destroy();
      this.modal = null;
    }
  }

  /**
   * 显示对话框
   *
   * @param content
   */
  static getModal(
    content: React.ReactNode,
    options: AlertCustomizeOptions = {}
  ) {
    const opts = {
      children: content,
      isOpened: true,
      isMask: true,
      isLock: true,
      closeOnClickOverlay: true,
      onHide: () => {
        this.destroy();
      },
      ...options,
    };
    this.modal = Modal.popup(opts);
  }

  /**
   * 提示对话框
   *
   * @param options
   */
  static alert(options: AlertOptions) {
    const {
      text,
      confirm,
      confirmText = "确定",
      customizeClass = "",
    }: AlertOptions = options;

    const content = (
      <div className={`${style.container} ${customizeClass}`}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div
            role="button"
            tabIndex={0}
            className={style.alertBtn}
            onClick={() => {
              confirm();
              this.destroy();
            }}
          >
            {confirmText}
          </div>
        </div>
      </div>
    );
    this.destroy();
    this.getModal(content);
  }

  /**
   * 可定制的提示对话框
   *
   * @param customize
   * @param options
   * @returns
   */
  static alertCustomize(
    customize: (destroy: () => void) => React.ReactNode,
    options: AlertCustomizeOptions = {}
  ) {
    const content = customize && customize(this.destroy);
    if (!content) return;
    this.destroy();
    this.getModal(content, options);
  }

  /**
   * 确认对话框
   *
   * @param options
   */
  static confirm(options: ConfirmOptions) {
    const {
      text,
      customizeClass = "",
      confirmText = "确定",
      cancelText = "取消",
      confirm,
      cancel = emptyFunction,
    } = options;
    const content = (
      <div className={`${style.container} ${customizeClass}`}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div
            role="button"
            tabIndex={0}
            className={style.cancelBtn}
            onClick={() => {
              cancel();
              this.destroy();
            }}
          >
            {cancelText}
          </div>
          <div
            role="button"
            tabIndex={0}
            className={style.confirmBtn}
            onClick={() => {
              confirm();
              this.destroy();
            }}
          >
            {confirmText}
          </div>
        </div>
      </div>
    );
    this.destroy();
    this.getModal(content);
  }
}
