import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Toast from '@plutojs/toast';
import '@plutojs/toast/build/index.css';
import './story.css';

export default {
  title: 'Toast 轻提示',
  component: Toast,
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
        <button className="modal-demo-btn" onClick={() => { Toast.info('aaa'); }}>点击弹出提示</button>
    </div>
  );
};
story1.story = {
  name: 'INFO',
};
