import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import InputNumber from "@/input-number";
import Modal from "@/modal";
import "@/input-number/build/index.css";
import "./story.css";

export default {
  title: "表单.InputNumber 计数器",
  component: InputNumber,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => (
  <div className="input-number-demo-btn-field">
    <div className="input-number-demo-item">
      <div className="input-number-demo-label">最小值为2：</div>
      <InputNumber
        min={2}
        onChange={(val) => {
          console.log(val);
        }}
      />
    </div>
    <div className="input-number-demo-item">
      <div className="input-number-demo-label">最大值为5：</div>
      <InputNumber
        max={5}
        onChange={(val) => {
          console.log(val);
        }}
      />
    </div>
    <div className="input-number-demo-item">
      <div className="input-number-demo-label">不可键盘输入：</div>
      <InputNumber
        keyboard={false}
        onChange={(val) => {
          console.log(val);
        }}
      />
    </div>
  </div>
);
story1.story = {
  name: "计数器",
};

export const story2 = () => (
  <Modal isOpened position="bottom">
    <div className="input-number-fixed-demo">
      <InputNumber
        min={2}
        onChange={(val) => {
          console.log(val);
        }}
      />
    </div>
  </Modal>
);
story2.story = {
  name: "固定底部的计数器",
};
