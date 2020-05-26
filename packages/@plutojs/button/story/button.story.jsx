import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Button from '@plutojs/button';
import '@plutojs/button/build/index.css';
import './story.css';

export default {
  title: '基础组件.Button 按钮',
  component: Button,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  const name = text('按钮文字', '创建表单');
  return (
    <div className="button-demo-field">
      <Button className="test-btn" onClick={() => { alert('创建成功'); }}>{name}</Button>
    </div>
  )
};
story1.story = {
  name: '文字按钮',
};
