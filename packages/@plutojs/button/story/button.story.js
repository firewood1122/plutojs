import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Button from '../build/button.min.js';

export default {
  title: 'Button 按钮',
  component: Button,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
    query: {
      id: '123',
    },
  },
};

export const story1 = () => {
  const name = text('text', '保存');
  return <Button>{name}</Button>;
};
story1.story = {
  name: '默认按钮',
};
