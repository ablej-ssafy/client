import type {Meta, StoryObj} from '@storybook/react';

import BasicInfoSection from './';

const meta = {
  title: 'Portfolio/BasicInfoSection',
  component: BasicInfoSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BasicInfoSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
