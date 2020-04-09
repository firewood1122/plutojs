import React from 'react';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const defaultView = () => {
  const name = text('Text', '保存');
  return <Button>{name}</Button>;
};

defaultView.story = {
  name: '文案按钮',
};
