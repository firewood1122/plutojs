import React, { Component, createRef } from 'react';
const style = require('./index.less');

interface PropsType {
  children: React.ReactNode,
  isOpened: Boolean,
  onHide: () => void,
  position?: 'top' | 'center' | 'bottom',
  closeOnClickOverlay?: boolean,
};

const positionMap = {
  top: style.top,
  center: style.center,
  bottom: style.bottom,
};

export default class Modal extends Component<PropsType, any> {
  constructor(props: PropsType) {
    super(props);
    this.modalEl = createRef();
  }

  private modalEl: any = null;
  private prePosition: string = ''; // body原定位方式
  private scrollTop: number = 0; // 页面原滚动高度

  /**
   * 设置页面定位
   */
  private setStyle = (isOpened: Boolean) => {
    if (isOpened) {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollTop}px`;
      this.modalEl.current.style.top = `${this.scrollTop}px`;
    } else {
      // 重新设置body定位
      document.body.style.position = this.prePosition || 'static';
      document.body.style.top = '0px';
      document.documentElement.scrollTop = this.scrollTop;
      document.body.scrollTop = this.scrollTop;
    }
  }

  componentDidMount() {
    const { isOpened } = this.props;
    this.prePosition = document.body.style.position;
    this.setStyle(isOpened);
  }

  componentDidUpdate() {
    const { isOpened } = this.props;
    this.setStyle(isOpened);
  }

  render() {
    const {
      children,
      isOpened,
      onHide,
      position = 'center',
      closeOnClickOverlay = true,
    }: PropsType = this.props;

    return (
      <React.Fragment>
        {
          isOpened && (
            <div
              ref={this.modalEl}
              className={`${style.modal} ${positionMap[position]} ${closeOnClickOverlay ? style.mask : ''}`}
              onClick={onHide}>
              <div onClick={e => { e.stopPropagation(); }}>{children}</div>
            </div>
          )
        }
      </React.Fragment>
    );
  }
}