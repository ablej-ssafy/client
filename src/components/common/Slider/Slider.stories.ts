import type {Meta, StoryObj} from '@storybook/react';

import Slider from './index';

const meta = {
  title: 'Common/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: {
      control: 'boolean',
    },
    max: {
      control: 'number',
    },
    value: {
      control: 'number',
    },
    unit: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Default Slider',
    max: 100,
    value: 50,
    fill: true,
    unit: '%',
  },
};

export const WithoutFill: Story = {
  args: {
    name: 'No Fill Slider',
    max: 100,
    value: 30,
    fill: false,
    unit: '%',
  },
};

export const CustomMaxValue: Story = {
  args: {
    name: 'Custom Max Slider',
    max: 200,
    value: 150,
    fill: true,
    unit: ' units',
  },
};
