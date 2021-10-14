import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Camera from "@/camera";
import "@/camera/build/index.css";
import "./story.css";

export default {
  title: "实验室.Camera 调用摄像头",
  component: Camera,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const onChange = (files) => {
    console.log(files);
  };
  return (
    <>
      <div className="camera-demo-field">
        <Camera text="点击录制" onChange={onChange} />
      </div>
      <div className="camera-demo-field">
        <Camera text="点击拍照" type="image" onChange={onChange} />
      </div>
    </>
  );
};
story1.story = {
  name: "调用摄像头",
};
