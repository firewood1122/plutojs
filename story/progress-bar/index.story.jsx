import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import ProgressBar from "@/progress-bar";
import "@/progress-bar/build/index.css";
import "./story.css";

export default {
  title: "基础.ProgressBar 进度条",
  component: ProgressBar,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const percent = text("百分比", 10);
  return (
    <>
      <div className="progress-bar-demo-field">
        <ProgressBar percent={percent}>
          <div className="progress-bar-demo-info">15:00</div>
        </ProgressBar>
      </div>
    </>
  );
};
story1.story = {
  name: "圆形进度条",
};
