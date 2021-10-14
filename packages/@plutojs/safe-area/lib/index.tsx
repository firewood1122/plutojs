import React, { Component } from "react";
import style from "./index.less";

export const SafeAreaBottom = class extends Component<any, any> {
  render() {
    return <div className={`${style.container}`}>{this.props.children}</div>;
  }
};
