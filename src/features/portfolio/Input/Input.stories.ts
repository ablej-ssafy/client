import type {Meta, StoryObj} from '@storybook/react';

import Button from './';

const meta = {
  title: 'Portfolio/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLabeled: false,
    placeholder: '내용을 입력하세요.',
    readOnly: false,
    disabled: false,
  },
};
export const Labeled: Story = {
  args: {
    isLabeled: true,
    label: '라벨',
    placeholder: '내용을 입력하세요.',
    readOnly: false,
    disabled: false,
  },
};
