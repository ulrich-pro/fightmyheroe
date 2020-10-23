import React from 'react';
import { Button, Col } from 'react-bootstrap';

import Heroe from './Heroe';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Molecules/Heroe',
  component: Heroe,
  argTypes: {},
};

const Template = (args) => (
  <Col xs={3}>
    <Heroe {...args} />
  </Col>
);

export const Base = Template.bind({});
Base.args = {
  heroe: { name: 'Name', image: { url: 'https://via.placeholder.com/500' }, id: 1 },
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  heroe: {
    name: 'John',
    image: { url: 'https://via.placeholder.com/300' },
    id: 2,
  },
  footer: <Button> My footer </Button>,
};
