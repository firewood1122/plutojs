import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Video from "@/video";
import Button from "@/button";
import "@/video/build/index.css";
import "@/button/build/index.css";
import "./story.css";

export default {
  title: "多媒体.Video 播放视频",
  component: Video,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const [closeVideo, setCloseVideo] = useState(false);
  return (
    <div className="video-demo-field">
      <Video
        closeVideo={closeVideo}
        coverUrl="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg"
        videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4"
        onClose={() => {
          setCloseVideo(false);
        }}
        controlsList="nodownload"
        disablePictureInPicture
        disableFast
        disableFastCallback={() => {
          alert("禁止快进视频");
        }}
      />
      <div className="video-demo-btn-field">
        <Button
          onClick={() => {
            setCloseVideo(true);
          }}
        >
          关闭视频
        </Button>
      </div>
    </div>
  );
};
story1.story = {
  name: "播放视频",
};
