import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  min: number,
  max: number,
};
interface StateType {
  count: number,
};
class InputNumber extends Component<PropsType, StateType> {

  static defaultProps = {
    min: 1,
    max: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      count: props.min,
    };
  }

  /**
   * 响应输入框修改
   */
  private change = (event) => {
    this.setState({
      count: event.target.value,
    });
  }

  /**
   * 点击减少按钮
   */
  private reduce = () => {
    const { min } = this.props;
    const { count } = this.state;

    if (count - 1 >= min) {
      this.setState({
        count: count - 1,
      });
    }
  }

  /**
   * 点击增加按钮
   */
  private add = () => {
    const { max } = this.props;
    const { count } = this.state;

    if (max !== 0 && count + 1 > max) {
      return;
    }
    this.setState({
      count: count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className={style.container}>
        <div className={style.reduce} onClick={this.reduce}></div>
        <input className={style.input} type="number" value={count} onChange={this.change} />
        <div className={style.add} onClick={this.add}></div>
      </div>
    );
  }
}

export default InputNumber;
