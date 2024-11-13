import type {Meta, StoryObj} from '@storybook/react';

import RecruitmentCard from '.';

const meta = {
  title: 'Common/RecruitmentCard',
  component: RecruitmentCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RecruitmentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
