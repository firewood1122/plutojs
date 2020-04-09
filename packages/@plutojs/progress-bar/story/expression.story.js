import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const Story2 = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
Story2.story = { name: '表情按钮' };