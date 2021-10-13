import React, { Component } from "react";
const style = require("./index.less");

interface PropsType {
  title?: string;
  hide?: boolean;
  zIndex?: number;
}
interface StateType {
  show: boolean;
  showBack: boolean;
}
export default class extends Component<PropsType, StateType> {
  state = {
    show: false,
    showBack: false,
  };

  static defaultProps = {
    title: "",
    hide: false,
    zIndex: 999,
  };

  static getDerivedStateFromProps(props: PropsType, state: StateType) {
    const { hide } = props;

    // 默认微信&支付宝，不显示头部
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return {
        show: hide
          ? !hide
          : userAgent.indexOf("micromessenger") === -1 &&
            userAgent.indexOf("alipayclient") === -1,
      };
    } else {
      return {
        show: false,
      };
    }
  }

  componentDidMount() {
    this.setState({
      showBack: window.history.length > 1,
    });
  }

  /**
   * 返回上一页
   */
  private clickBack() {
    const { history } = window;
    history.back();
  }

  render(): React.ReactNode {
    const { show, showBack } = this.state;
    const { title, zIndex } = this.props;
    if (!show) return null;
    return (
      <React.Fragment>
        <div className={style.container} style={{ zIndex }}>
          <div className={style.header}>
            {showBack ? (
              <div className={style.left} onClick={this.clickBack}></div>
            ) : (
              <div className={style.blankLeft}></div>
            )}
            <div className={style.title}>{title}</div>
            <div className={style.right}></div>
          </div>
        </div>
        <div className={style.fakeHeader}></div>
      </React.Fragment>
    );
  }
}
