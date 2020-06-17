import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import LoadMore from '@plutojs/load-more';
import Toast from '@plutojs/toast';
import '@plutojs/toast/build/index.css';
import './story.css';

export default {
  title: '视图组件.LoadMore 加载更多',
  component: LoadMore,
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
    <LoadMore loadMore={() => { Toast.info('load more'); }}>
      <div className="load-more-demo-field">
      </div>
    </LoadMore>
  );
};
story1.story = {
  name: '加载更多',
};
