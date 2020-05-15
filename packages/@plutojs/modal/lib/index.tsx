import React, { useState, useEffect } from 'react';
const style = require('./index.less');

interface PropsType {
  children: JSX.Element,
  isOpened: Boolean,
  onHide: () => void,
  position?: string,
  closeOnClickOverlay?: boolean,
};

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const show = () => {
    setIsOpened(true);
  };
  const hide = () => {
    setIsOpened(false);
  };
  return {
    isOpened,
    show,
    hide,
  };
};

let prePosition: string = ''; // 记录当前body的position值
export default function Modal(props: PropsType) {
  const {
    children,
    isOpened,
    onHide,
  }: PropsType = props;

  // 记录body原有定位
  if (!prePosition) {
    prePosition = document.body.style.position;
  }

  useEffect(() => {
    // 设置body定位
    if (isOpened) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = prePosition;
    }
    return () => {
      document.body.style.position = prePosition;
    };
  }, [isOpened]);

  return (
    <React.Fragment>
      {
        isOpened && (
          <div className={`${style.modal} ${style.center}`} onClick={onHide}>
            <div onClick={e => { e.stopPropagation(); }}>{children}</div>
          </div>
        )
      }
    </React.Fragment>
  );
}