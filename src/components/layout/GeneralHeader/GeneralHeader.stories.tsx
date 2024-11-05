import type {Meta, StoryObj} from '@storybook/react';

import GeneralHeader from '@/components/layout/GeneralHeader/index';

const meta = {
  title: 'Layout/GeneralHeader',
  component: GeneralHeader,
} satisfies Meta<typeof GeneralHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GeneralHeaderStory: Story = {
  name: 'Default',
  args: {},
};
