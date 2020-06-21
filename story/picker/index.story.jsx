import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Dialog from '@plutojs/picker';
import '@plutojs/picker/build/index.css';
import './story.css';

export default {
  title: '表单组件.Picker 选择器',
  component: Dialog,
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
    <div className="dialog-demo-btn-field">
      <button className="dialog-demo-btn" onClick={() => {
        Dialog.confirm('这是一个Confirm对话框，通常用于二次确认', () => {
          alert('点击了确定');
        });
      }}>Confirm对话框</button>
    </div>
  );
};
story1.story = {
  name: '选择器',
};
