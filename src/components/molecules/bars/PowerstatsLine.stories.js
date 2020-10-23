import React from 'react';

import PowerstatsLine from './PowerstatsLine';

export default {
  title: 'Molecules/PowerstatsLine',
  component: PowerstatsLine,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PowerstatsLine {...args} />;

export const EmptyStat = Template.bind({});
EmptyStat.args = {
  label: 'Stat',
  variant: 'primary',
  data: 0,
};
export const FullStat = Template.bind({});
FullStat.args = {
  label: 'Stat',
  variant: 'primary',
  data: 100,
};
export const MiddleStat = Template.bind({});
MiddleStat.args = {
  label: 'Stat',
  variant: 'primary',
  data: 50,
};
