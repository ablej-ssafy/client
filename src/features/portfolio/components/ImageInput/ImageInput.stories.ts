import type {Meta, StoryObj} from '@storybook/react';

import ImageInput from './';

const meta = {
  title: 'Portfolio/components/ImageInput',
  component: ImageInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Labeled: Story = {
  args: {
    isLabeled: true,
    label: '라벨',
  },
};
