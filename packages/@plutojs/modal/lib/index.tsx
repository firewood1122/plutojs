import React, { useState, useEffect, useRef } from 'react';
const style = require('./index.less');

interface PropsType {
  children: JSX.Element,
  isOpened: Boolean,
  onHide: () => void,
  position?: 'top' | 'center' | 'bottom',
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

let prePosition: string = document.body.style.position; // body原有定位
let scrollTop: number = 0; // 页面滚动高度
const positionMap = {
  top: style.top,
  center: style.center,
  bottom: style.bottom,
};

export default function Modal(props: PropsType) {
  const {
    children,
    isOpened,
    onHide,
    position = 'center',
    closeOnClickOverlay = true,
  }: PropsType = props;

  // 重新设置body定位
  const reset = (scrollTop: number) => {
    document.body.style.position = prePosition || 'static';
    document.body.style.top = '0px';
    document.documentElement.scrollTop = scrollTop;
    document.body.scrollTop = scrollTop;
  };

  const modalEl = useRef(null);
  useEffect(() => {
    if (isOpened) {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollTop}px`;
      modalEl.current.style.top = `${scrollTop}px`;
    } else {
      reset(scrollTop);
    }
    return () => {
      document.body.style.position = prePosition || 'static';
    };
  }, [isOpened]);

  return (
    <React.Fragment>
      {
        isOpened && (
          <div
            ref={modalEl}
            className={`${style.modal} ${positionMap[position]} ${closeOnClickOverlay ? style.mask : ''}`}
            onClick={onHide}>
            <div onClick={e => { e.stopPropagation(); }}>{children}</div>
          </div>
        )
      }
    </React.Fragment>
  );
}