import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  type?: 'submit' | 'button' | 'reset',
  className?: string,
  disabled?: boolean,
  onClick: (event: React.MouseEvent) => void,
}
interface StateType {
}
export default class Button extends Component<PropsType, StateType> {
  static defaultProps = {
    type: 'button',
    className: '',
    disabled: false,
  };

  render() {
    const { children, type, className, disabled, onClick } = this.props;

    // 拼装样式
    let classNameList = [style.button];
    if (className) classNameList.push(className);
    if (disabled) classNameList = classNameList.concat([style.disabled, 'disabled-btn']);

    return (
      <button type={type} className={classNameList.join(' ')} onClick={(e) => {
        if (!disabled) onClick(e);
      }}>{children}</button>
    );
  }
}
