import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Carousel from '@plutojs/carousel';
import '@plutojs/carousel/build/index.css';

export default {
  title: '视图组件.Carousel 轮播图',
  component: Carousel,
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
    <Carousel>
      <img src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg" />
      <img src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg" />
    </Carousel>
  )
};
story1.story = {
  name: '轮播图',
};
