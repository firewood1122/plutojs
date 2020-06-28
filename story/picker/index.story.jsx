import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Picker from '@plutojs/picker';
import '@plutojs/picker/build/index.css';
import './story.css';

export default {
  title: '表单组件.Picker 选择器',
  component: Picker,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  return (
    <div className="picker-demo-field">
      <Picker />
    </div>
  );
};
story1.story = {
  name: '选择器',
};
