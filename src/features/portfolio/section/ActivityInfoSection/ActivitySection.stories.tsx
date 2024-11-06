import type {Meta, StoryObj} from '@storybook/react';

import ActivityInfoSection from '@/features/portfolio/section/ActivityInfoSection';

const meta = {
  title: 'Portfolio/sections/ActivityInfoSection',
  component: ActivityInfoSection,
} satisfies Meta<typeof ActivityInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {},
};
