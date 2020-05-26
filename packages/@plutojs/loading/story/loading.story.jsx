import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Loading from '@plutojs/loading';
import '@plutojs/loading/build/index.css';
import './story.css';

export default {
  title: '操作反馈.Loading 页面提示',
  component: Loading,
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
    <div className="modal-demo-btn-field">
      <button className="modal-demo-btn" onClick={() => {
        Loading.show('提交中');
        setTimeout(() => {
          Loading.hide();
        }, 3000);
      }}>点击显示加载</button>
    </div>
  );
};
story1.story = {
  name: '全局Loading',
};
