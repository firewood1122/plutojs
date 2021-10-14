import React, { Component } from "react";
import style from "./index.less";

interface PropsType {
  type?: string;
  text?: string;
  onChange?: (files: any) => void;
}
export default class Camera extends Component<PropsType> {
  static defaultProps = {
    type: "video",
    text: "开始录制",
  };

  private onChange = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event.target.files);
  };

  render() {
    const { type, text } = this.props;
    return (
      <div className={`${style.button}`}>
        <div>{text}</div>
        <input
          className={`${style.input}`}
          accept={`${type}/*`}
          type="file"
          capture="user"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
