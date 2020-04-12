import React, { Component } from 'react';
// import './index.css';

interface Props {
}
interface States {
}
export default class Button extends Component<Props, States> {
  render() {
    const { children } = this.props;
    return (
      <button>{children}</button>
    );
  }
}
