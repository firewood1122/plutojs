import React, { Component } from 'react';
const style = require('./index.less');

interface Props {
  onClick: () => void,
}
interface States {
}
export default class Button extends Component<Props, States> {
  render() {
    const { children, onClick } = this.props;
    return (
      <button className={style.button} onClick={onClick}>{children}</button>
    );
  }
}
