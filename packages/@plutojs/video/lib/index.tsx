import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  coverUrl: string;
  videoUrl: string;
  controls?: boolean;
  playsInline?: boolean;
}
interface StateType {
  showVideo: boolean,
}
export default class Video extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false,
    };
  }

  static defaultProps = {
    controls: true,
    playsInline: true,
  }

  private videoEl = null; // 视频对象

  /**
   * 占击播放视频
   */
  private play = () => {
    this.setState({
      showVideo: true,
    });
    if (this.videoEl) {
      this.videoEl.play(); // 自动播放
    }
  }

  /**
   * 响应结束播放视频
   */
  private onEnded = () => {
    this.setState({
      showVideo: false,
    });
  }

  render() {
    const { coverUrl, videoUrl, controls, playsInline } = this.props;
    const { showVideo } = this.state;

    return (
      <div className={`${style.container}`}>
        {
          coverUrl && (
            <div className={`${showVideo ? style.hidden : ''}`}>
              <div className={`${style.coverIcon}`} onClick={this.play}></div>
              <img className={`${style.cover}`} src={coverUrl} />
            </div>
          )}
        {
          videoUrl && (
            <div className={`${style.videoContainer} ${!showVideo ? style.hidden : ''}`}>
              <video
                ref={item => { this.videoEl = item; }}
                src={videoUrl}
                poster={coverUrl}
                controls={controls}
                playsInline={playsInline}
                style={{ objectFit: 'contain' }}
                onEnded={this.onEnded}
              />
            </div>
          )
        }
      </div>
    );
  }
}
