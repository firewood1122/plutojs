import React, { Component } from 'react';
import { debounce } from 'debounce';

interface PropsType {
  children?: React.ReactNode,
  scrollThreshold?: number,
  loadMore?: Function,
}
interface StateType {
}
export default class LoadMore extends Component<PropsType, StateType> {
  static defaultProps = {
    scrollThreshold: 1,
  };

  /**
   * 页面滚动事件
   */
  private scroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    let { scrollThreshold, loadMore } = this.props;
    if (scrollThreshold > 1) scrollThreshold = 1;

    // 加载更多
    console.log(scrollTop + clientHeight, scrollHeight * scrollThreshold);
    if (scrollTop + clientHeight >= scrollHeight * scrollThreshold && loadMore) {
      loadMore();
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div onTouchEnd={debounce(this.scroll, 200)}>
        {children}
      </div>
    );
  }
}
