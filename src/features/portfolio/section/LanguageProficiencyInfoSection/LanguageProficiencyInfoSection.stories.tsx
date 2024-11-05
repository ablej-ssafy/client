import type {Meta, StoryObj} from '@storybook/react';

import LanguageProficiencyInfoSection from '@/features/portfolio/section/LanguageProficiencyInfoSection';

const meta = {
  title: 'Portfolio/sections/LanguageProficiencyInfoSection',
  component: LanguageProficiencyInfoSection,
} satisfies Meta<typeof LanguageProficiencyInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LanguageProficiencyInfoSectionStory: Story = {
  name: 'Default',
  args: {},
};
