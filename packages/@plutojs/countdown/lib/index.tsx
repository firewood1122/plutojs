import React, { Component } from 'react';

interface PropsType {
  leftSecond: any; // 剩余秒数
  callback?: (secod: number) => void;
  renderChildren?: (hour: number, min: number, second: number) => React.ReactNode; // 倒计时内容
  done?: any; // 回调函数
};

interface StateType {
  hour: number;
  min: number;
  second: number;
};

export default class extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      second: 0
    };
  }

  private timer = null;

  static defaultProps = {
    callback: (second: number) => { },
    renderChildren: (hour: number, min: number, second: number) => {
      return `${hour}小时${min}分${second}秒`;
    },
    done: () => { },
  }

  componentDidMount() {
    const { leftSecond, callback } = this.props;
    this.setState({
      hour: leftSecond > 3600 ? Math.floor(leftSecond / 3600) : 0,
      min: Math.floor((leftSecond % 3600) / 60),
      second: (leftSecond % 3600) % 60,
    });
    this.handleCountdown(leftSecond, callback);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
    this.timer = null;
    this.setState = (state, callback) => {
      return;
    };
  }

  private handleCountdown(leftSecond, callback) {
    const { done } = this.props;
    let deadLine = Date.now() + leftSecond * 1000;
    if (Date.now() < deadLine) {
      this.timer = window.setTimeout(() => {
        if (Date.now() < deadLine) {
          leftSecond--;
          this.setState({
            hour: leftSecond > 3600 ? Math.floor(leftSecond / 3600) : 0,
            min: Math.floor((leftSecond % 3600) / 60),
            second: (leftSecond % 3600) % 60,
          });
          callback(leftSecond);
          this.handleCountdown(leftSecond, callback);
        } else {
          this.setState({
            second: 0,
          });
          window.clearTimeout(this.timer);
          this.timer = null;
          if (done) done();
        }
      }, 1000);
    }
  }

  render() {
    const { renderChildren } = this.props;
    const { hour, min, second } = this.state;
    if (hour === 0 && min == 0 && second === 0) {
      return null;
    }
    return renderChildren(hour, min, second);
  }
}
