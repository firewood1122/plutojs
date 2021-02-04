import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  count: number, // 验证码位数
  change: Function, // 输入回调方法
};
interface StateType {
  value: Array<number>,
};
class InputCode extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      value: [],
    };
  }

  static defaultProps = {
    count: 4,
    change: () => { },
  }

  private inputEl = null; // 输入框

  private onChange = (e) => {
    const { count, change } = this.props;
    const value = e.target.value;
    this.setState({
      value: [...value],
    });
    change(value);

    // 输入完毕，自动关闭键盘
    if (value && value.length === count) {
      this.inputEl.blur();
    }
  }

  /**
   * 清空输入框
   */
  clear() {
    this.setState({
      value: [],
    }, () => {
      this.inputEl.value = '';
      this.inputEl.focus();
    });
  }

  render() {
    const { count } = this.props;
    const { value } = this.state;

    const items = [];
    for (let i = 0; i < count; i++) {
      if (value[i]) {
        items.push(( // 输入数字
          <div key={`item-${i}`} className={style.value}>{value[i]}</div>
        ));
      } else {
        items.push(( // 显示占位
          <div key={`item-${i}`} className={style.item}></div>
        ));
      }
    }
    return (
      <div className={style.container}>
        {...items}
        <input className={style.input} maxLength={count} onChange={this.onChange} type="tel" ref={item => {
          this.inputEl = item;
        }} />
      </div>
    );
  }
}

export default InputCode;
