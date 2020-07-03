import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import Picker from '@plutojs/picker';
import '@plutojs/picker/build/index.css';
import './story.css';
const cityData = require('./data.json');

export default {
  title: '表单组件.Picker 选择器',
  component: Picker,
  decorators: [withKnobs, withQuery],
  parameters: {
    backgrounds: [
      { name: '默认背景', value: '#fff', default: true },
      { name: '黑色背景', value: '#2f2f2f' },
    ],
  },
};

export const story1 = () => {
  const items = [
    {
      text: '天河区',
      value: 1,
    },
    {
      text: '海珠区',
      value: 1,
    },
    {
      text: '白云区',
      value: 1,
    },
  ];
  return (
    <div className="picker-demo-field">
      <Picker items={items} />
    </div>
  );
};
story1.story = {
  name: '单列选择器',
};

export const story2 = () => {
  const items = cityData.items.map(item => ({
    text: item.province.name,
    value: item.province.cityCode,
    children: item.cities.map(item => ({
      text: item.name,
      value: item.cityCode,
    })),
  }));
  return (
    <div className="picker-demo-field">
      <Picker items={items} />
    </div>
  );
};
story2.story = {
  name: '多列选择器',
};