import React, { useRef, useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Modal from '@plutojs/modal';
import '@plutojs/modal/build/index.css';
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
  const [isOpened, setIsOpened] = useState(false);

  // 更新input定位
  const inputEl = useRef(null);
  const onBlur = () => {
    setTimeout(() => {
      document.documentElement.scrollTop = document.documentElement.scrollTop;
    }, 0);
  };

  const position = text('模态框内容定位', 'center');
  const closeOnClickOverlay = boolean('是否有不透明背景', true);
  return (
    <div className="modal-demo-wrap">
      <div className="modal-demo-field"></div>
      <div className="modal-demo-btn-field">
        <button className="modal-demo-btn" onClick={() => { setIsOpened(true); }}>显示模态框</button>
      </div>
      <Modal
        isOpened={isOpened}
        onHide={() => { setIsOpened(false); }}
        position={position}
        closeOnClickOverlay={closeOnClickOverlay}>
        <input ref={inputEl} type="text" className="modal-demo-input" placeholder="请输入文字" onBlur={onBlur} />
      </Modal>
    </div>
  );
};
story1.story = {
  name: '表单模态框',
};
