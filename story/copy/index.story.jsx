import React, { useCallback } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Copy from '@plutojs/copy';
import './story.css';

export default {
  title: '操作反馈.Copy 复制组件',
  component: Copy,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  let copyEle = null;
  const copy = useCallback(node => {
    copyEle = node;
  });
  return (
    <div className="copy-demo-btn-field">
      <div className="copy-demo-text">需复制的内容：<span ref={copy}>测试内容</span></div>
      <div>
        <button className="copy-demo-btn" onClick={() => {
          Copy.copy(copyEle);
        }}>复制</button>
      </div>
    </div>
  );
};
story1.story = {
  name: '复制文案',
};
