import type {Meta, StoryObj} from '@storybook/react';

import LanguageProficiencyInfoSection from '@/features/portfolio/LanguageProficiencyInfoSection/index';

const meta = {
  title: 'Portfolio/LanguageProficiencyInfoSection',
  component: LanguageProficiencyInfoSection,
} satisfies Meta<typeof LanguageProficiencyInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LanguageProficiencyInfoSectionStory: Story = {
  name: 'Default',
  args: {},
};
