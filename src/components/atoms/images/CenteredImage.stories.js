import React from 'react';

import CenteredImage from './CenteredImage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Atoms/CenteredImage',
  component: CenteredImage,
  argTypes: {},
};

const Template = (args) => <CenteredImage {...args} />;

export const DistantImage = Template.bind({});
DistantImage.args = {
  source: 'https://via.placeholder.com/500',
};

export const LocalImage = Template.bind({});
LocalImage.args = {
  source: `${process.env.PUBLIC_URL}/versus.png`,
};
