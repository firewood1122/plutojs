import React, { Component } from "react";
import Modal from "~/core/modal/lib";
import style from "./index.less";

interface PropsType {
  coverUrl: string;
  videoUrl: string;
  fullscreen?: boolean;
  fullscreenTips?: string;
  currentTime?: number;
  controls?: boolean;
  playsInline?: boolean;
  closeVideo?: boolean;
  onClose?: () => void;
  onCloseFullscreenVideo?: (time: number) => void;
  controlsList?: string;
  disablePictureInPicture?: boolean;
  disableFast?: boolean;
  disableFastCallback?: () => void;
}
interface StateType {
  initVideo: boolean;
  showVideo: boolean;
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
    fullscreen: false,
    fullscreenTips: "",
    currentTime: 0,
    controls: true,
    playsInline: true,
    closeVideo: false,
    onClose: () => {
      // do nothing
    },
    onCloseFullscreenVideo: () => {
      // do nothing
    },
    controlsList: "",
    disablePictureInPicture: false,
    disableFast: false,
  };

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
  private last = 0; // 上一次时间

  /**
   * 占击播放视频
   */
  private play = () => {
    this.setState(
      {
        showVideo: true,
        initVideo: true,
      },
      () => {
        if (this.videoEl) {
          const currentTime = this.props.currentTime || 0;
          this.last = currentTime;
          this.videoEl.currentTime = currentTime;
          this.videoEl.play(); // 自动播放
        }
      }
    );
  };

  /**
   * 响应开始播放视频
   */
  private onCanPlay = () => {
    const { currentTime }: PropsType = this.props;
    if (currentTime > 0 && this.videoEl.currentTime < currentTime) {
      this.videoEl.currentTime = currentTime;
    }
  };

  /**
   * 暂停视频
   */
  private pause = () => {
    if (this.videoEl) {
      this.videoEl.pause();
    }
  };

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
  };

  /**
   * 响应时间进度
   */
  private onTimeUpdate = () => {
    const { disableFast, disableFastCallback } = this.props;
    if (disableFast) {
      const current = this.videoEl.currentTime;
      if (current - this.last > 2) {
        this.videoEl.currentTime = this.last;
        disableFastCallback && disableFastCallback();
      } else {
        this.last = current;
      }
    }
  };

  /**
   * 关闭全屏视频
   */
  private closeFullscreenVideo = () => {
    const { onCloseFullscreenVideo } = this.props;
    onCloseFullscreenVideo && onCloseFullscreenVideo(this.videoEl.currentTime);
    this.setState({
      showVideo: false,
    });
  };

  render() {
    const {
      coverUrl,
      videoUrl,
      fullscreen,
      fullscreenTips,
      controls,
      playsInline,
      controlsList,
      disablePictureInPicture,
    } = this.props;
    const { initVideo, showVideo } = this.state;

    return (
      <div
        className={`${
          initVideo && fullscreen && showVideo
            ? style.fullscreenContainer
            : style.container
        }`}
      >
        {coverUrl && (
          <div className={`${showVideo ? style.hidden : ""}`}>
            <div className={`${style.coverIcon}`} onClick={this.play}></div>
            <img className={`${style.cover}`} src={coverUrl} />
          </div>
        )}
        {videoUrl && initVideo && (
          <React.Fragment>
            {fullscreen ? (
              <Modal
                isOpened={showVideo}
                isLock={true}
                onHide={() => {
                  // do nothing
                }}
              >
                <React.Fragment>
                  <div className={`${style.close}`}>
                    <div className={`${style.tips}`}>{fullscreenTips}</div>
                    <div
                      className={`${style.closeIcon}`}
                      onClick={this.closeFullscreenVideo}
                    ></div>
                  </div>
                  <div className={`${style.videoContent}`}>
                    <video
                      preload="metadata"
                      ref={(item) => {
                        this.videoEl = item;
                      }}
                      src={videoUrl}
                      controls={controls}
                      playsInline={playsInline}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                      onEnded={this.onEnded}
                      controlsList={controlsList}
                      disablePictureInPicture={disablePictureInPicture}
                      onTimeUpdate={this.onTimeUpdate}
                      onCanPlay={this.onCanPlay}
                    />
                  </div>
                </React.Fragment>
              </Modal>
            ) : (
              <div
                className={`${style.videoContainer} ${
                  !showVideo ? style.displayHidden : ""
                }`}
              >
                <video
                  preload="metadata"
                  ref={(item) => {
                    this.videoEl = item;
                  }}
                  src={videoUrl}
                  poster={coverUrl}
                  controls={controls}
                  playsInline={playsInline}
                  style={{ objectFit: "contain" }}
                  onEnded={this.onEnded}
                  controlsList={controlsList}
                  disablePictureInPicture={disablePictureInPicture}
                  onTimeUpdate={this.onTimeUpdate}
                />
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}
