import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Dialog from "@/dialog";
import "@/dialog/build/index.css";
import "./story.css";

export default {
  title: "提示.Dialog 对话框",
  component: Dialog,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const alertOptions = {
    text: "这是一个Alert对话框，通常用于二次确认",
    confirm: () => {
      alert("点击了确定");
    },
    closeOnClickOverlay: false,
  };
  const confirmOptions = {
    text: "这是一个Confirm对话框，通常用于二次确认",
    confirm: () => {
      alert("点击了确定");
    },
    closeOnClickOverlay: false,
  };

  return (
    <div className="dialog-demo-field">
      <button
        className="dialog-demo-field-btn"
        onClick={() => {
          Dialog.alert(alertOptions);
        }}
      >
        Alert对话框
      </button>
      <button
        className="dialog-demo-field-btn"
        onClick={() => {
          Dialog.confirm(confirmOptions);
        }}
      >
        Confirm对话框
      </button>
    </div>
  );
};
story1.story = {
  name: "Dialog对话框",
};
