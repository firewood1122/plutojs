import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Toast from "@/toast";
import "@/toast/build/index.css";
import "./story.css";

export default {
  title: "提示.Toast 文字提示",
  component: Toast,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const name = text("提示内容", "你点击了按钮");
  return (
    <div className="toast-demo-field">
      <button
        className="toast-demo-field-btn"
        onClick={() => {
          Toast.info(name);
        }}
      >
        普通提示
      </button>
      <button
        className="toast-demo-field-btn"
        onClick={() => {
          Toast.error(new Error("发生了错误"));
        }}
      >
        错误提示
      </button>
    </div>
  );
};
story1.story = {
  name: "文字提示",
};
