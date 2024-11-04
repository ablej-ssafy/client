import type {Meta, StoryObj} from '@storybook/react';

import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';

import SectionHeader from './';

const meta = {
  title: 'Portfolio/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '경력 및 분야',
  },
};

export const WithAddButton: Story = {
  args: {
    title: '경력 및 분야',
    children: <AddSectionItemButton text="경력 추가" />,
  },
};
