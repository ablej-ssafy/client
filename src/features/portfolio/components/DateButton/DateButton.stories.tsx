import type {Meta, StoryObj} from '@storybook/react';

import DateButton from './';

const meta = {
  title: 'Portfolio/components/DateButton',
  component: DateButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '2021-09-01',
    onClick: () => {},
  },
};
