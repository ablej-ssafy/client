import type {Meta, StoryObj} from '@storybook/react';

import EducationInfoSection from '@/features/portfolio/EducationInfoSection/index';

const meta = {
  title: 'Portfolio/EducationInfoSection',
  component: EducationInfoSection,
} satisfies Meta<typeof EducationInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EducationInfoSectionStory: Story = {
  name: 'Default',
  args: {},
};
