import type {Meta, StoryObj} from '@storybook/react';

import EducationInfoSection from '@/features/portfolio/section/EducationInfoSection';

const meta = {
  title: 'Portfolio/sections/EducationInfoSection',
  component: EducationInfoSection,
} satisfies Meta<typeof EducationInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EducationInfoSectionStory: Story = {
  name: 'Default',
  args: {},
};
