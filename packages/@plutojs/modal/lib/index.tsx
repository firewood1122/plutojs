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
  zIndex?: number,
  target?: React.RefObject<HTMLElement>,
  onHide: () => void,
};
interface StateType {
  height: number,
}

class Modal extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.modalEl = createRef();
    this.state = {
      height: 0,
    };
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
    zIndex: 999,
    closeOnClickOverlay: true,
  }

  private modalEl: any = null;
  private contentEl: any = null;
  private prePosition: string = ''; // 页面原定位方式
  private scrollTop: number = 0; // 页面原滚动高度
  private containerHeight: number = 0; // 浮层容器高度

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
    const { isOpened, isLock, target } = this.props;
    if (isLock) {
      this.prePosition = document.body.style.position;
      this.setStyle(isOpened);
    }
    this.setState({
      height: document.documentElement.clientHeight || document.body.clientHeight,
    });

    // 安卓机型，键盘弹出/收起时，重新计算高度
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/android|miuibrowser/i.test(userAgent)) {
      window.addEventListener('resize', () => {
        const height = document.documentElement.clientHeight || document.body.clientHeight;
        if (this.containerHeight === height) {
          return;
        }

        // 重新设置高度
        this.containerHeight = height;
        this.setState({
          height,
        });

        // 定位到对应的输入框
        const currentEl = document.activeElement as HTMLElement;
        if (currentEl.tagName.toLowerCase() === 'input') {
          if (target && target.current) {
            const targetEl: HTMLElement = target.current;
            targetEl.scrollTop = currentEl.offsetTop - targetEl.offsetHeight + currentEl.offsetHeight;
          }
        }
      });
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
        } catch (err) {
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
      zIndex,
      onHide,
    }: PropsType = this.props;
    const { height } = this.state;

    return (
      <React.Fragment>
        {
          isOpened && (
            <div
              ref={this.modalEl}
              style={{ zIndex, height: `${height}px` }}
              className={`${isLock ? style.lockModal : style.modal} ${this.positionMap[position]} ${isMask ? style.mask : ''}`}
              onClick={() => { if (closeOnClickOverlay && onHide) onHide(); }}>
              <div ref={this.contentEl} className={style.content} onClick={e => { e.stopPropagation(); }}>{children}</div>
            </div>
          )
        }
      </React.Fragment>
    );
  }
}

export default Modal;
