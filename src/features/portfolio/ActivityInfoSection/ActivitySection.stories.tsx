import type {Meta, StoryObj} from '@storybook/react';

import ActivityInfoSection from '@/features/portfolio/ActivityInfoSection/index';

const meta = {
  title: 'Portfolio/ActivityInfoSection',
  component: ActivityInfoSection,
} satisfies Meta<typeof ActivityInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {},
};
