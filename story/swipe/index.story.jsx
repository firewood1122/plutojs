import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Swipe from "@/swipe";
import "@/swipe/build/index.css";
import "./story.css";

export default {
  title: "滚动.Swipe 滑块",
  component: Swipe,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => {
  const [show, setShow] = useState(false);
  return (
    <Swipe show={show} setShow={setShow}>
      <div className="swipe-demo-field" />
      {show && <div className="swipe-extend-demo-field" />}
    </Swipe>
  );
};
story1.story = {
  name: "滑块",
};
