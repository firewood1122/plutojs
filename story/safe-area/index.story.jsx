import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import { SafeAreaBottom } from '@/safe-area';
import '@/safe-area/build/index.css';
import './story.css';

export default {
  title: '基础.SafeArea 安全区域',
  component: SafeAreaBottom,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => (
  <div className="safe-area-demo-field">
    <SafeAreaBottom>底部工具栏</SafeAreaBottom>
  </div>
);
story1.story = {
  name: '安全区域',
};
