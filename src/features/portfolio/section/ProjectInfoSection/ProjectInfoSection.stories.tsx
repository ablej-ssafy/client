import type {Meta, StoryObj} from '@storybook/react';

import ProjectInfoSection from '@/features/portfolio/section/ProjectInfoSection';

const meta = {
  title: 'Portfolio/sections/ProjectInfoSection',
  component: ProjectInfoSection,
} satisfies Meta<typeof ProjectInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {},
};
