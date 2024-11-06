import type {Meta, StoryObj} from '@storybook/react';

import LandingHeader from '@/components/layout/LandingHeader';

const meta = {
  title: 'Layout/LandingHeader',
  component: LandingHeader,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof LandingHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LandingHeaderStory: Story = {
  name: 'Default',
  args: {},
};
