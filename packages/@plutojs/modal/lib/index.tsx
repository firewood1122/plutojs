import ReactDOM from 'react-dom';
import React, { Component, createRef } from 'react';
const style = require('./index.less');

interface PropsType {
  children: React.ReactNode,
  isOpened: Boolean,
  position?: 'top' | 'center' | 'bottom',
  isMask?: boolean,
  isLock?: boolean,
  closeOnClickOverlay?: boolean,
  onHide: () => void,
};

class Modal extends Component<PropsType, any> {
  constructor(props: PropsType) {
    super(props);
    this.modalEl = createRef();
  }

  private positionMap = {
    top: style.top,
    center: style.center,
    bottom: style.bottom,
  };

  static defaultProps = {
    position: 'center',
    isMask: true,
    isLock: true,
    closeOnClickOverlay: true,
  }

  private modalEl: any = null;
  private prePosition: string = ''; // 页面原定位方式
  private scrollTop: number = 0; // 页面原滚动高度

  /**
   * 锁定/解锁页面滚动
   */
  private setStyle = (isOpened: Boolean) => {
    if (isOpened) {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${this.scrollTop}px`;
      if (this.modalEl) this.modalEl.current.style.top = `${this.scrollTop}px`;
    } else {
      // 重新设置body定位
      document.body.style.position = this.prePosition || 'static';
      document.body.style.top = '0px';
      document.documentElement.scrollTop = this.scrollTop;
      document.body.scrollTop = this.scrollTop;
    }
  }

  componentDidMount() {
    const { isOpened, isLock } = this.props;
    if (isLock) {
      this.prePosition = document.body.style.position;
      this.setStyle(isOpened);
    }
  }

  componentDidUpdate() {
    const { isOpened, isLock } = this.props;
    if (isLock) {
      this.setStyle(isOpened);
    }
  }

  componentWillUnmount() {
    const { isLock } = this.props;
    if (isLock) {
      this.setStyle(false);
    }
  }

  /**
   * 动态添加到页面
   */
  static popup = (properties: any) => {
    const { ...props } = properties || {};
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Modal {...props} />, div);

    return {
      destroy() {
        try {
          ReactDOM.unmountComponentAtNode(div);
          document.body.removeChild(div);
        } catch(err) {
        }
      }
    }
  }

  render() {
    const {
      children,
      isOpened,
      position,
      isMask,
      isLock,
      closeOnClickOverlay,
      onHide,
    }: PropsType = this.props;

    return (
      <React.Fragment>
        {
          isOpened && (
            <div
              ref={this.modalEl}
              className={`${isLock ? style.lockModal : style.modal} ${this.positionMap[position]} ${isMask ? style.mask : ''}`}
              onClick={() => { if (closeOnClickOverlay && onHide) onHide(); }}>
              <div onClick={e => { e.stopPropagation(); }}>{children}</div>
            </div>
          )
        }
      </React.Fragment>
    );
  }
}

export default Modal;
