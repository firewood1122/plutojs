import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Header from '@plutojs/header';
import '@plutojs/header/build/index.css';

export default {
  title: '基础组件.Header 头部导航',
  component: Header,
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
    <Header title="头部导航标题" />
  );
};
story1.story = {
  name: '头部导航',
};
