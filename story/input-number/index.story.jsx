import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import InputNumber from '@plutojs/input-number';
import '@plutojs/input-number/build/index.css';
import './story.css';

export default {
  title: '表单组件.InputNumber 数字输入框',
  component: InputNumber,
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
    <div className="input-number-demo-btn-field">
      <InputNumber />
    </div>
  );
};
story1.story = {
  name: '数字输入框',
};
