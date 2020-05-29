import React, { Component, createRef } from 'react';
const style = require('./index.less');

interface PropsType {
  min?: number,
  max?: number,
  keyboard?: boolean,
  onChange: Function,
};
interface StateType {
  count: number,
};
class InputNumber extends Component<PropsType, StateType> {

  static defaultProps = {
    min: 1,
    max: 0,
    keyboard: true,
    onChange: () => { },
  }

  constructor(props) {
    super(props);
    this.state = {
      count: props.min,
    };
    this.inputEl = createRef();
  }

  private inputEl;

  /**
   * 响应输入框修改
   */
  private change = (event) => {
    const { min, max, onChange } = this.props;
    const { value } = event.target;

    // 处理异常输入
    if (value === '' || !/^[0-9]*$/.test(value)) {
      this.setState({
        count: min,
      });
      return;
    } else if (parseInt(value) > max) {
      this.setState({
        count: max,
      });
      return;
    }

    const inputValue = parseInt(value);
    this.inputEl.current.value = inputValue;
    this.setState({
      count: inputValue,
    });

    // 回调onChange方法
    onChange && onChange(inputValue);
  }

  /**
   * 点击减少按钮
   */
  private reduce = () => {
    const { min, onChange } = this.props;
    const { count } = this.state;

    if (count - 1 >= min) {
      this.setState({
        count: count - 1,
      });
      // 回调onChange方法
      onChange && onChange(count - 1);
    }
  }

  /**
   * 点击增加按钮
   */
  private add = () => {
    const { max, onChange } = this.props;
    const { count } = this.state;

    if (max !== 0 && count + 1 > max) {
      return;
    }
    this.setState({
      count: count + 1,
    });
    // 回调onChange方法
    onChange && onChange(count + 1);
  }

  render() {
    const { keyboard } = this.props;
    const { count } = this.state;
    return (
      <div className={style.container}>
        <div className={style.reduce} onClick={this.reduce}></div>
        {
          keyboard ?
            <input ref={this.inputEl} className={style.input} type="number" value={count} onChange={this.change} pattern="[0-9]*" />
            :
            <div className={style.input}>{count}</div>
        }
        <div className={style.add} onClick={this.add}></div>
      </div>
    );
  }
}

export default InputNumber;
