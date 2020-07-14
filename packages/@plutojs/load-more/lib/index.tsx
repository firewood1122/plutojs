import React, { Component } from 'react';
import { debounce } from 'debounce';

interface PropsType {
  children: React.ReactNode,
  bodyScroll?: boolean,
  scrollThreshold?: number,
  loadMore?: Function,
}
interface StateType {
}
export default class LoadMore extends Component<PropsType, StateType> {
  static defaultProps = {
    bodyScroll: true,
    scrollThreshold: 1,
  };

  private containerEl: HTMLElement = null;

  componentDidMount() {
    const { bodyScroll } = this.props;

    if (bodyScroll) { // 页面内滚动
      this.scroll(document, bodyScroll);
    } else { // 区块内滚动
      const childNode = this.containerEl.childNodes[0] as HTMLElement;
      this.scroll(childNode, bodyScroll);
    }
  }

  /**
   * 响应滚动事件
   */
  private scroll = (node: HTMLElement | Document, bodyScroll: boolean) => {
    node.addEventListener('touchend', debounce(() => {
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
      alert(scrollTop + clientHeight >= scrollHeight * scrollThreshold);
      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold && loadMore) {
        loadMore();
      }
    }, 500));
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
