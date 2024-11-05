import type {Meta, StoryObj} from '@storybook/react';

import DatePicker from './';

const meta = {
  title: 'Portfolio/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '2021-09-01',
    onClick: () => {},
  },
};
