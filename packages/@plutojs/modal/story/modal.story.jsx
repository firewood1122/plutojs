import React, { useRef } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Modal, { useModal } from '..';
import './story.css';

export default {
  title: 'Modal 模态框',
  component: Modal,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  const inputModal = useModal();

  // 更新input定位
  const inputEl = useRef(null);
  const onBlur = () => {
    setTimeout(() => {
      document.documentElement.scrollTop = document.documentElement.scrollTop;
    }, 0);
  };

  return (
    <div>
      <div className="demo-field"></div>
      <div className="demo-btn-field">
        <button className="demo-btn" onClick={inputModal.show}>显示模态框</button>
      </div>
      <Modal isOpened={inputModal.isOpened} onHide={inputModal.hide}>
        <input ref={inputEl} type="text" className="demo-input" placeholder="请输入文字" onBlur={onBlur} />
      </Modal>
    </div>
  );
};
story1.story = {
  name: '表单模态框',
};
