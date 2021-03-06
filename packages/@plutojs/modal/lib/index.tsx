import ReactDOM from 'react-dom';
import React, { Component, createRef } from 'react';
const style = require('./index.less');

/**
 * 模态框管理器
 */
function ModalManager() {
  let modalItems: Array<Modal> = [];
  let showingModalItems: Array<Modal> = [];

  /**
   * 添加浮层对象
   */
  this.addModal = (modal: Modal) => {
    modalItems.push(modal);
  };

  /**
   * 删除浮层对象
   */
  this.removeModal = (modal: Modal) => {
    const newModalItems: Array<Modal> = [];
    modalItems.forEach((item: Modal) => {
      if (modal.modalId !== item.modalId) newModalItems.push(item);
    });
    modalItems = newModalItems;

    const newShowingModalItems: Array<Modal> = [];
    showingModalItems.forEach((item: Modal) => {
      if (modal.modalId !== item.modalId) newShowingModalItems.push(item);
    });
    showingModalItems = newShowingModalItems;
  };

  /**
   * 显示当前浮层对象
   */
  this.showModal = (modal: Modal) => {
    showingModalItems.push(modal);
    modalItems.forEach((item) => {
      item.setVisibility(modal.modalId === item.modalId ? 'visible' : 'hidden');
    });
  };

  /**
   * 隐藏当前浮层对象
   */
  this.hideModal = (modal: Modal) => {
    const newItems: Array<Modal> = [];
    showingModalItems.forEach((item: Modal) => {
      if (modal.modalId !== item.modalId) newItems.push(item);
    });

    showingModalItems = newItems;
    if (showingModalItems.length > 0) {
      // 恢复显示当前浮层对象
      showingModalItems[showingModalItems.length - 1].setVisibility('visible');
    }
  };

  /**
   * 获取需展示浮层个数
   */
  this.getShowingCount = () => {
    return showingModalItems.length;
  };
}
const modalManager = new ModalManager();

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
  visibility: 'visible' | 'hidden',
}

class Modal extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.modalEl = createRef();
    this.state = {
      height: 0,
      visibility: 'visible',
    };

    // 加入模态框管理器
    this.modalId = `${Date.now()}_${Math.random()}`;
    modalManager.addModal(this);
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

  public modalId: string = '';
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
      if (document.body.style.position === 'fixed') return;
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${this.scrollTop}px`;
      if (this.modalEl) this.modalEl.current.style.top = `${this.scrollTop}px`;
    } else {
      // 重新设置body定位
      if (modalManager.getShowingCount() === 0) {
        document.body.style.position = this.prePosition || 'static';
        document.body.style.top = '0px';
        document.documentElement.scrollTop = this.scrollTop;
        document.body.scrollTop = this.scrollTop;
      }
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

  componentDidUpdate(prevProps: PropsType) {
    const { isOpened, isLock } = this.props;
    if (isLock && prevProps.isOpened !== isOpened) {
      if (isOpened) {
        modalManager.showModal(this);
      } else {
        modalManager.hideModal(this);
      }
      this.setStyle(isOpened);
    }
  }

  componentWillUnmount() {
    const { isLock } = this.props;
    modalManager.removeModal(this);
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

  /**
   * 设置是否可见
   * 
   * @param visibility 
   */
  setVisibility = (visibility: 'visible' | 'hidden') => {
    this.setState({
      visibility,
    });
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
    const { height, visibility } = this.state;

    return (
      <React.Fragment>
        {
          isOpened && (
            <div
              ref={this.modalEl}
              style={{ zIndex, height: `${height}px`, visibility }}
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
