import React from 'react';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';

export default {
  title: 'Button',
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
  const name = text('Text', '保存');
  return <Button>{name}</Button>;
};
story1.story = {
  name: '文案按钮',
};

export const Story2 = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
Story2.story = { name: '表情按钮' };
