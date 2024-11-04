import type {Meta, StoryObj} from '@storybook/react';

import CompanyCard from './';

const meta = {
  title: 'Common/CompanyCard',
  component: CompanyCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CompanyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
