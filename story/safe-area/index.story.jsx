import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import { SafeAreaBottom } from '@plutojs/safe-area';
import '@plutojs/safe-area/build/index.css';
import './story.css';

export default {
  title: '视图组件.SafeArea 组件',
  component: SafeAreaBottom,
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
    <div className="safe-area-demo-field">
      <SafeAreaBottom>底部工具栏</SafeAreaBottom>
    </div>
  )
};
story1.story = {
  name: '安全区域组件',
};
