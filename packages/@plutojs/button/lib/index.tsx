import React, { Component } from 'react';
const style = require('./index.less');

interface Props {
}
interface States {
}
export default class Button extends Component<Props, States> {
  render() {
    const { children } = this.props;
    return (
      <button className={style.button}>{children}</button>
    );
  }
}
