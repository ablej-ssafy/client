import type {Meta, StoryObj} from '@storybook/react';

import ProjectInfoSection from '@/features/portfolio/ProjectInfoSection/index';

const meta = {
  title: 'Portfolio/ProjectInfoSection',
  component: ProjectInfoSection,
} satisfies Meta<typeof ProjectInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {},
};
