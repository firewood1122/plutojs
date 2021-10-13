import React from 'react'
import Modal from '~/core/modal/lib'
import style from './index.less'

let modal = null

interface PropsType {
  isMask?: boolean
  closeOnClickOverlay?: boolean
}

/**
 * 销毁对话框
 */
const destroy = () => {
  if (modal) {
    modal.destroy()
    modal = null
  }
}

/**
 * 显示对话框
 *
 * @param content
 */
const getModal = (content: React.ReactNode, options: PropsType = {}) => {
  const opts = {
    children: content,
    isOpened: true,
    isMask: true,
    isLock: true,
    closeOnClickOverlay: true,
    onHide: () => {
      destroy()
    },
    ...options,
  }
  modal = Modal.popup(opts)
}

export default {
  alert: (
    text: string,
    confirm: () => void,
    confirmText = '确定',
    customizeClass = '',
  ) => {
    const content = (
      <div className={`${style.container} ${customizeClass}`}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div
            role="button"
            tabIndex={0}
            className={style.alertBtn}
            onClick={() => {
              confirm()
              destroy()
            }}
          >
            {confirmText}
          </div>
        </div>
      </div>
    )
    destroy()
    getModal(content)
  },
  alertCustomize: (
    customize: (destroy: () => void) => React.ReactNode,
    options: PropsType = {},
  ) => {
    const content = customize && customize(destroy)
    if (!content) return
    destroy()
    getModal(content, options)
  },
  confirm: (
    text: string,
    confirm: () => void,
    cancelText = '取消',
    confirmText = '确定',
    cancel = () => {
      /* do nothing */
    },
  ) => {
    const content = (
      <div className={style.container}>
        <div className={style.text}>{text}</div>
        <div className={style.btnContainer}>
          <div
            role="button"
            tabIndex={0}
            className={style.cancelBtn}
            onClick={() => {
              cancel()
              destroy()
            }}
          >
            {cancelText}
          </div>
          <div
            role="button"
            tabIndex={0}
            className={style.confirmBtn}
            onClick={() => {
              confirm()
              destroy()
            }}
          >
            {confirmText}
          </div>
        </div>
      </div>
    )
    destroy()
    getModal(content)
  },
}
