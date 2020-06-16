import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Video from '@plutojs/video';
import '@plutojs/video/build/index.css';
import './story.css';

export default {
  title: '视图组件.Video 视频组件',
  component: Video,
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
    <div className="video-demo-field">
      <Video
        coverUrl="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg"
        videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4" />
    </div>
  );
};
story1.story = {
  name: '视频组件',
};