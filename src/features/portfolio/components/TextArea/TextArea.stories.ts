import type {Meta, StoryObj} from '@storybook/react';

import TextArea from './index';

const meta = {
  title: 'Portfolio/components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLabeled: false,
    placeholder: '내용을 입력하세요.',
    readOnly: false,
    disabled: false,
    rows: 4,
  },
};
export const Labeled: Story = {
  args: {
    isLabeled: true,
    label: '라벨',
    placeholder: '내용을 입력하세요.',
    readOnly: false,
    disabled: false,
    rows: 4,
  },
};
