import type {Meta, StoryObj} from '@storybook/react';

import CertificateInfoSection from '@/features/portfolio/CertificateInfoSection/index';

const meta = {
  title: 'Portfolio/CertificateInfoSection',
  component: CertificateInfoSection,
} satisfies Meta<typeof CertificateInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CertificateInfoSectionStory: Story = {
  name: 'Default',
  args: {},
};
