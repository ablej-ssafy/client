import type {Meta, StoryObj} from '@storybook/react';

import Tag from './';

const meta = {
  title: 'Common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
  },
};
