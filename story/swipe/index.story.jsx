import React, { useRef } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import LoadMore from '@/load-more';
import Toast from '@/toast';
import '@/toast/build/index.css';
import './story.css';

export default {
  title: '滚动.Swipe 滑块',
  component: LoadMore,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => (
  <LoadMore loadMore={() => { Toast.info('load more'); }}>
    <div className="load-more-demo-field" />
  </LoadMore>
);
story1.story = {
  name: '页面内加载更多',
};

export const story2 = () => (
  <LoadMore loadMore={() => { Toast.info('load more'); }} bodyScroll={false}>
    <div className="load-more-demo-container">
      <div className="load-more-demo-field" />
    </div>
  </LoadMore>
);
story2.story = {
  name: '区块内加载更多',
};
