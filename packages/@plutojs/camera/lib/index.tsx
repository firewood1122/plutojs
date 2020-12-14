import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  type?: string,
  text?: string,
  onChange?: Function,
}
interface StateType {
}
export default class Camera extends Component<PropsType, StateType> {
  static defaultProps = {
    type: 'video',
    text: '开始录制',
  };

  private onChange = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event.target.files);
  }

  render() {
    const { type, text } = this.props;
    return (
      <div className={`${style.button}`}>
        <div>{text}</div>
        <input className={`${style.input}`} accept={`${type}/*`} type="file" capture="user" onChange={this.onChange} />
      </div>
    );
  }
}
