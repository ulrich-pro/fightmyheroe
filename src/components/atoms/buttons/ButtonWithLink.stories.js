import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ButtonWithLink from './ButtonWithLink';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Atoms/ButtonWithLink',
  component: ButtonWithLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <ButtonWithLink {...args} />
  </BrowserRouter>
);

export const Small = Template.bind({});
Small.args = {
  variant: 'dark',
  size: 'sm',
  text: 'Small',
  block: false,
};

export const SmallBlock = Template.bind({});
SmallBlock.args = {
  variant: 'dark',
  size: 'sm',
  text: 'SmallBlock',
  block: true,
};

export const Big = Template.bind({});
Big.args = {
  variant: 'dark',
  size: 'lg',
  text: 'Big',
  block: false,
};

export const BigBlock = Template.bind({});
BigBlock.args = {
  variant: 'dark',
  size: 'lg',
  text: 'BigBlock',
};
