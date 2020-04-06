import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const Story1 = () => <Button>Hello Button</Button>;
Story1.story = { name: '文案按钮' };