import React, { useState, useRef, useEffect } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Input from "@/input";
import "./story.css";

export default {
  title: "表单.Input 输入框",
  component: Input,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const input = useRef(null);
  const [text, setText] = useState("");

  return (
    <div className="input-demo-field">
      <div className="text">{text}</div>
      <div>
        <Input
          ref={(item) => (input.current = item)}
          type="textarea"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onBlur={() => {
            input.current.clear();
            setText("");
          }}
        />
      </div>
      <div
        className="clear"
        onClick={() => {
          input.current.focus();
        }}
      >
        点击聚焦
      </div>
      <div
        className="clear"
        onClick={() => {
          input.current.clear();
          setText("");
        }}
      >
        点击清空
      </div>
    </div>
  );
};
story1.story = {
  name: "输入框",
};
