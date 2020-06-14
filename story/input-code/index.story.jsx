import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import InputCode from '@plutojs/input-code';
import '@plutojs/input-code/build/index.css';
import './index.css';

export default {
  title: '表单组件.InputCode 验证码输入框',
  component: InputCode,
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
    <div className="input-code-demo-field">
      <div className="input-code-demo-content">
        <InputCode count={4} />
      </div>
    </div>
  );
};
story1.story = {
  name: '验证码输入框',
};
