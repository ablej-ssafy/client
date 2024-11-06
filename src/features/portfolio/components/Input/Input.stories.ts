import type {Meta, StoryObj} from '@storybook/react';

import Input from './index';

const meta = {
  title: 'Portfolio/components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

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
