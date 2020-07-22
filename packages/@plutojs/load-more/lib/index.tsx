import React, { Component } from 'react';
import { debounce } from 'debounce';

interface PropsType {
  children: React.ReactNode,
  bodyScroll?: boolean,
  scrollThreshold?: number,
  loadMore?: Function,
  debounceTime?: number,
}
interface StateType {
}
export default class LoadMore extends Component<PropsType, StateType> {
  static defaultProps = {
    bodyScroll: true,
    scrollThreshold: 1,
    debounceTime: 1000,
  };

  private containerEl: HTMLElement = null;

  componentDidMount() {
    const { bodyScroll, debounceTime } = this.props;

    if (bodyScroll) { // 页面内滚动
      this.scroll(document, bodyScroll, debounceTime);
    } else { // 区块内滚动
      const childNode = this.containerEl.childNodes[0] as HTMLElement;
      this.scroll(childNode, bodyScroll, debounceTime);
    }
  }

  /**
   * 响应滚动事件
   */
  private scroll = (node: HTMLElement | Document, bodyScroll: boolean, debounceTime: number) => {
    let currentY = 0;

    node.addEventListener('touchstart', (e: TouchEvent) => {
      currentY = e.changedTouches[0].clientY;
    });
    node.addEventListener('touchend', debounce((e: TouchEvent) => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (!bodyScroll) {
        scrollTop = (node as HTMLElement).scrollTop;
        clientHeight = (node as HTMLElement).clientHeight;
        scrollHeight = (node as HTMLElement).scrollHeight;
      }

      let { scrollThreshold, loadMore } = this.props;
      if (scrollThreshold > 1) scrollThreshold = 1;

      // 处理与模态框冲突的问题
      if (bodyScroll && document.body.style.position === 'fixed') {
        return;
      }

      // 加载更多
      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold && loadMore) {
        if (!(scrollTop === 0 && clientHeight === scrollHeight && currentY - e.changedTouches[0].clientY < 20)) {
          loadMore();
        }
      }
    }, debounceTime));
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={item => { this.containerEl = item; }}>
        {children}
      </div>
    );
  }
}
