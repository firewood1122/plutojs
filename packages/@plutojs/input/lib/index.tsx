import React, { Component } from 'react';

interface PropsType {
  type: string,
  value: string,
  className?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent) => {},
  onFocus?: (e: React.FocusEvent) => {},
  maxLength?: number,
  offsetBottom?: number,
}
interface StateType {
}
const noop = {};
export default class Input extends Component<PropsType, StateType> {
  static defaultProps = {
    type: 'text',
    className: '',
    placeholder: '',
    onChange: noop,
    onFocus: noop,
    offsetBottom: 50,
  };

  private inputEl = null; // 输入框实例

  private onFocus = (e: React.FocusEvent) => {
    const { onFocus, offsetBottom } = this.props;
    if (onFocus) onFocus(e);

    // 处理安卓机器，系统键盘遮挡输入区域的问题
    setTimeout(() => {
      const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
      const el = this.inputEl.current as HTMLElement;
      const scrollTop = el.offsetTop - clientHeight + el.offsetHeight + offsetBottom;
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
    }, 500);
  };

  render() {
    const { type, value, className, placeholder, onChange, maxLength = null } = this.props;

    return (
      type !== 'textarea' ?
        <input
          className={className}
          ref={item => this.inputEl = item}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={this.onFocus}
          maxLength={maxLength}
        /> :
        <textarea
          className={className}
          ref={item => this.inputEl = item}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={this.onFocus}
          maxLength={maxLength}></textarea>
    );
  }
}
