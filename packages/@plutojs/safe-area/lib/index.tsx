import React, { Component } from 'react';
const style = require('./index.less');

export const SafeAreaBottom = class extends Component<any, any> {
  render() {
    return (
      <div className={`${style.container}`}>
        {this.props.children}
      </div>
    );
  }
}
