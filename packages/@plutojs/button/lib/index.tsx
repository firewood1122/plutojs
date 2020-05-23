import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  className?: string,
  onClick: () => void,
}
interface StateType {
}
export default class Button extends Component<PropsType, StateType> {
  static defaultProps = {
    className: ''
  };

  render() {
    const { children, className, onClick } = this.props;
    return (
      <button className={`${style.button} ${className}`} onClick={onClick}>{children}</button>
    );
  }
}
