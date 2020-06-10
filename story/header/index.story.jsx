import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
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
  const hide = boolean('是否隐藏', false);
  return (
    <div style={{ height: '110vh' }}>
      <Header title="头部导航标题" hide={hide} zIndex={998} />
      <div style={{ fontSize: '24px' }}>页面内容</div>
    </div>
  );
};
story1.story = {
  name: '头部导航',
};
