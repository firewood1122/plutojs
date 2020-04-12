import React from 'react';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';

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
  const name = '123';
  return <Button>{name}</Button>;
};
story1.story = {
  name: '默认按钮',
};
