import React, { Component } from "react";

interface PropsType {
  type: string;
  value: string;
  className?: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  maxLength?: number;
  offsetTop?: number;
}
const noop = () => {
  // do nothing
};
export default class Input extends Component<PropsType> {
  static defaultProps = {
    type: "text",
    className: "",
    placeholder: "",
    onChange: noop,
    onFocus: noop,
    offsetTop: 100,
  };

  private inputEl = null; // 输入框实例

  private onFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { onFocus, offsetTop } = this.props;
    if (onFocus) onFocus(e);

    // 处理安卓机器，系统键盘遮挡输入区域的问题
    setTimeout(() => {
      if (this.inputEl) {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const newScrollTop =
          scrollTop + this.inputEl.getBoundingClientRect().top - offsetTop;
        document.body.scrollTop = newScrollTop;
        document.documentElement.scrollTop = newScrollTop;
      }
    }, 500);
  };

  /**
   * 清空输入框
   */
  clear() {
    this.inputEl.value = "";
  }

  render() {
    const {
      type,
      value,
      className,
      placeholder,
      onChange,
      maxLength = null,
    } = this.props;

    return type !== "textarea" ? (
      <input
        className={className}
        ref={(item) => (this.inputEl = item)}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={this.onFocus}
        maxLength={maxLength}
      />
    ) : (
      <textarea
        className={className}
        ref={(item) => (this.inputEl = item)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={this.onFocus}
        maxLength={maxLength}
      ></textarea>
    );
  }
}
