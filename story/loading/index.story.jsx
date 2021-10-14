import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Loading from "@/loading";
import "@/loading/build/index.css";
import "./story.css";

export default {
  title: "提示.Loading 加载中",
  component: Loading,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => (
  <div className="loading-demo-btn-field">
    <button
      className="loading-demo-btn"
      onClick={() => {
        Loading.show("提交中");
        setTimeout(() => {
          Loading.hide();
        }, 3000);
      }}
    >
      点击显示加载
    </button>
  </div>
);
story1.story = {
  name: "加载中",
};
