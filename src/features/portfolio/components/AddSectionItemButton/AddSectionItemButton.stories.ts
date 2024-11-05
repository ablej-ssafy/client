import type {Meta, StoryObj} from '@storybook/react';

import AddSectionItemButton from './';

const meta = {
  title: 'Portfolio/components/AddSectionItemButton',
  component: AddSectionItemButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AddSectionItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '학력 추가',
  },
};
