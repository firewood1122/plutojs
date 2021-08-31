import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Header from '@/header';
import '@/header/build/index.css';

export default {
  title: '导航.Header 页头',
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
      <Header title="网红韩版包包女2020新款学生牛津布防水防盗防师兄大容量双肩背包" hide={hide} zIndex={998} />
      <div style={{ fontSize: '24px' }}>页面内容</div>
    </div>
  );
};
story1.story = {
  name: '页头',
};
