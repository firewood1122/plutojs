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
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  maxLength?: number;
  offsetTop?: number;
  disabled?: boolean;
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
    onBlur: noop,
    offsetTop: 100,
    disabled: false,
  };

  private inputEl = null; // 输入框实例

  // 向上寻找可滚动的父节点
  private getContainerEl = (el: HTMLElement) => {
    const parentEl = el.parentElement;
    if (parentEl && parentEl.nodeName !== "BODY") {
      if (parentEl.clientHeight < parentEl.scrollHeight) {
        return parentEl;
      } else {
        return this.getContainerEl(parentEl);
      }
    } else {
      return null;
    }
  };

  private onFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { onFocus, offsetTop } = this.props;
    if (onFocus) onFocus(e);

    // 处理安卓机器，系统键盘遮挡输入区域的问题
    setTimeout(() => {
      if (this.inputEl) {
        const containerEl: HTMLElement = this.getContainerEl(this.inputEl);
        if (containerEl) {
          const scrollTop = containerEl.scrollTop;
          const newScrollTop =
            scrollTop + this.inputEl.getBoundingClientRect().top - offsetTop;
          containerEl.scrollTop = newScrollTop;
        } else {
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          const newScrollTop =
            scrollTop + this.inputEl.getBoundingClientRect().top - offsetTop;
          document.body.scrollTop = newScrollTop;
          document.documentElement.scrollTop = newScrollTop;
        }
      }
    }, 500);
  };

  private onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(e);
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
      disabled,
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
        onBlur={this.onBlur}
        maxLength={maxLength}
        disabled={disabled}
      />
    ) : (
      <textarea
        className={className}
        ref={(item) => (this.inputEl = item)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        maxLength={maxLength}
        disabled={disabled}
      ></textarea>
    );
  }
}
