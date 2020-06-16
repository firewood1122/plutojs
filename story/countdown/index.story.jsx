import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Toast from '@plutojs/toast';
import Countdown from '@plutojs/countdown';
import '@plutojs/toast/build/index.css';
import '@plutojs/button/build/index.css';
import './story.css';

export default {
  title: '视图组件.Countdown 倒计时',
  component: Countdown,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  return (
    <div className="countdown-demo-field">
      <Countdown leftSecond={20} done={() => { Toast.info('倒计时结束'); }} />
    </div>
  )
};
story1.story = {
  name: '默认按钮',
};
