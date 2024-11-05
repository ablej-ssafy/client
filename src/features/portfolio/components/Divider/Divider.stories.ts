import type {Meta, StoryObj} from '@storybook/react';

import Divider from './';

const meta = {
  title: 'Portfolio/components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
