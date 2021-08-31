import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Dialog from '@/dialog';
import '@/dialog/build/index.css';
import './story.css';

export default {
  title: '提示.Dialog 对话框',
  component: Dialog,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => (
  <div className="dialog-demo-btn-field">
    <button
      className="dialog-demo-btn"
      onClick={() => {
        Dialog.alert('这是一个Alert对话框，通常用于二次确认', () => {
          alert('点击了确定');
        });
      }}
    >
      Alert对话框
    </button>
  </div>
);
story1.story = {
  name: 'Alert对话框',
};

export const story2 = () => (
  <div className="dialog-demo-btn-field">
    <button
      className="dialog-demo-btn"
      onClick={() => {
        Dialog.confirm('这是一个Confirm对话框，通常用于二次确认', () => {
          alert('点击了确定');
        });
      }}
    >
      Confirm对话框
    </button>
  </div>
);
story2.story = {
  name: 'Confirm对话框',
};
