import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Camera from '@plutojs/camera';
import '@plutojs/camera/build/index.css';
import './story.css';

export default {
  title: '基础组件.摄像头组件',
  component: Camera,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  const onChange = (files) => {
    console.log(files);
  };
  return (
    <React.Fragment>
      <div className="camera-demo-field">
        <Camera text="点击录制" onChange={onChange} />
      </div>
      <div className="camera-demo-field">
        <Camera text="点击拍照" type="image" onChange={onChange} />
      </div>
    </React.Fragment>
  )
};
story1.story = {
  name: 'Camera 摄像头组件',
};
