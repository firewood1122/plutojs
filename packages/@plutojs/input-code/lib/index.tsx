import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  count: number, // 验证码位数
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
  }

  private onChange = (e) => {
    const value = e.target.value;
    this.setState({
      value: [...value],
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
        <input className={style.input} maxLength={count} onChange={this.onChange} type="tel" />
      </div>
    );
  }
}

export default InputCode;
