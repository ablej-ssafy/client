import type {Meta, StoryObj} from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Ahey/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
    color: 'type1',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    color: 'type2',
  },
};
