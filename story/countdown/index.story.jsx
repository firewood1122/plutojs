import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withQuery } from "@storybook/addon-queryparams";
import Toast from "@/toast";
import Countdown from "@/countdown";
import "@/toast/build/index.css";
import "./story.css";

export default {
  title: "基础.Countdown 倒计时",
  component: Countdown,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: "默认背景", value: "#fff", default: true },
      { name: "黑色背景", value: "#2f2f2f" },
    ],
  },
};

export const story1 = () => (
  <div className="countdown-demo-field">
    <Countdown
      leftSecond={20}
      done={() => {
        Toast.info("倒计时结束");
      }}
    />
  </div>
);
story1.story = {
  name: "倒计时",
};
