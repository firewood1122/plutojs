import React from 'react';
import { storiesOf } from '@storybook/react';
import { withQuery } from '@storybook/addon-queryparams';

storiesOf('App', <div />)
  .addDecorator(withQuery)
  .addParameters({
    query: {
      id: '123',
    },
  })
  .add('显示页面参数', () => (
    <div>
      {window.location.search}
    </div>
  ));