import React, { useRef } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import InputCode from '@/input-code';
import Button from '@/button';
import '@/input-code/build/index.css';
import '@/button/build/index.css';
import './story.css';

export default {
  title: '表单.InputCode 验证码输入框',
  component: InputCode,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  const inputCodeEl = useRef(null);
  return (
    <>
      <div className="input-code-demo-field">
        <div className="input-code-demo-content">
          <InputCode ref={inputCodeEl} count={6} change={(value) => { console.log(value); }} />
        </div>
      </div>
      <div className="input-code-demo-btn-field">
        <Button onClick={() => { inputCodeEl.current.clear(); }}>清空输入框</Button>
      </div>
    </>
  );
};
story1.story = {
  name: '验证码输入框',
};
