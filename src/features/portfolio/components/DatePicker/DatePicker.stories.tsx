import type {Meta, StoryObj} from '@storybook/react';

import DatePicker from './';

const meta = {
  title: 'Portfolio/components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Labeled: Story = {
  args: {isLabeled: true, label: '입학년월'},
};
