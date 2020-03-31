import { addParameters } from '@storybook/react';

const newViewports = {
  'iPhone5': {
    name: 'iPhone 5/SE',
    styles: {
      width: '320px',
      height: '568px',
    },
    type: 'mobile',
  },
  'iPhone6': {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
    type: 'mobile',
  },
  'iPhone6+': {
    name: 'iPhone 6/7/8 Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
    type: 'mobile',
  },
  'iPhoneX': {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
    type: 'mobile',
  },
  'iPad': {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  'iPadPro': {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
    type: 'tablet',
  },
};

addParameters({
  viewport: {
    viewports: newViewports,
    defaultViewport: 'iPhone6',
  },
});