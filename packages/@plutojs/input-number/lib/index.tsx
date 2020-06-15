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

  private inputEl; // 输入框实例

  /**
   * 响应输入框修改
   */
  private change = (event) => {
    const { min, max, onChange } = this.props;
    const { value } = event.target;

    if (value === '' || !/^[0-9]*$/.test(value)) { // 处理异常输入
      this.setState({
        count: min,
      });
      return;
    } else if (max !== 0 && parseInt(value) > max) { // 处理超出最大值
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

  /**
   * 响应输入框点击
   */
  private onFocus = () => {
    this.inputEl.current.value = '';
  }

  /**
   * 响应输入框失去焦点
   */
  private onBlur = () => {
    const { count } = this.state;
    const { value } = this.inputEl.current;
    if (value === '') {
      this.inputEl.current.value = count;
    }
  }

  render() {
    const { keyboard } = this.props;
    let { count } = this.state;

    return (
      <div className={style.container}>
        <div className={style.reduce} onClick={this.reduce}></div>
        {
          keyboard ?
            <input
              ref={this.inputEl}
              className={style.input}
              type="number"
              pattern="[0-9]*"
              value={count}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.change}
            />
            :
            <div className={style.input}>{count}</div>
        }
        <div className={style.add} onClick={this.add}></div>
      </div>
    );
  }
}

export default InputNumber;
