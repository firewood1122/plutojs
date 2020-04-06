import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('button', module)
  .addParameters({
    query: {
      mock: true,
    }
  })
  .add('Prints the document.search', () => (
    <div>
      This is the current document.search: {document.search}, it includes `mock`!
    </div>
  ));