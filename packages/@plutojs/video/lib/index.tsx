import React, { Component } from 'react';
const style = require('./index.less');

interface PropsType {
  coverUrl: string;
  videoUrl: string;
  controls?: boolean;
  playsInline?: boolean;
  closeVideo?: boolean,
  onClose?: Function,
  controlsList?: string,
  disablePictureInPicture?: boolean,
}
interface StateType {
  initVideo: boolean,
  showVideo: boolean,
}
export default class Video extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      initVideo: false,
      showVideo: false,
    };
  }

  static defaultProps = {
    controls: true,
    playsInline: true,
    closeVideo: false,
    onClose: {},
    controlsList: '',
    disablePictureInPicture: false,
  }

  componentDidUpdate(prevProps: PropsType) {
    const { closeVideo, onClose } = this.props;
    if (prevProps.closeVideo !== closeVideo && closeVideo === true) {
      this.setState({
        showVideo: false,
      });
      onClose && onClose();
      if (this.videoEl) {
        this.videoEl.pause();
        this.videoEl.currentTime = 0;
      }
    }
  }

  private videoEl = null; // 视频对象

  /**
   * 占击播放视频
   */
  private play = () => {
    this.setState({
      showVideo: true,
      initVideo: true,
    }, () => {
      if (this.videoEl) {
        this.videoEl.play(); // 自动播放
      }
    });
  }

  /**
   * 响应结束播放视频
   */
  private onEnded = () => {
    const { onClose } = this.props;
    this.setState({
      showVideo: false,
    });
    onClose && onClose();
    if (this.videoEl) {
      this.videoEl.pause();
      this.videoEl.currentTime = 0;
    }
  }

  render() {
    const { coverUrl, videoUrl, controls, playsInline, controlsList, disablePictureInPicture } = this.props;
    const { initVideo, showVideo } = this.state;

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
          videoUrl && initVideo && (
            <div className={`${style.videoContainer} ${!showVideo ? style.displayHidden : ''}`}>
              <video
                preload="metadata"
                ref={item => { this.videoEl = item; }}
                src={videoUrl}
                poster={coverUrl}
                controls={controls}
                playsInline={playsInline}
                style={{ objectFit: 'contain' }}
                onEnded={this.onEnded}
                controlsList={controlsList}
                disablePictureInPicture={disablePictureInPicture}
              />
            </div>
          )
        }
      </div>
    );
  }
}
