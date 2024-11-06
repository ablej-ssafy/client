import type {Meta, StoryObj} from '@storybook/react';

import ExperienceInfoSection from '@/features/portfolio/section/ExperienceInfoSection';

const meta = {
  title: 'Portfolio/sections/ExperienceInfoSection',
  component: ExperienceInfoSection,
} satisfies Meta<typeof ExperienceInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExperienceInfoSectionStory: Story = {
  name: 'Default',
  args: {},
};
