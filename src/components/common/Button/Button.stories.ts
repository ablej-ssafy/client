import type {Meta, StoryObj} from '@storybook/react';

import Button from './';

const meta = {
  title: 'Common/Button',
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
