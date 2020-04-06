import React from 'react';
import { Button } from '@storybook/react/demo';
import { addParameters } from '@storybook/react';

export default {
  title: 'Button',
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

addParameters({
  query: {
    mock: true,
  },
});

export const Story1 = () => <Button>Hello Button {document.search}</Button>;
Story1.story = { name: '文案按钮' };