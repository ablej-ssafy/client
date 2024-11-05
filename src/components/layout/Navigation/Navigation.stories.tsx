import type {Meta, StoryObj} from '@storybook/react';

import NavigationButton from '@/components/layout/NavigationButton';

import Navigation from './';

const meta: Meta<typeof Navigation> = {
  title: 'Layout/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    invertBackground: false,
  },
  render: args => (
    <Navigation {...args}>
      <NavigationButton href="/recommend">맞춤채용공고</NavigationButton>
      <NavigationButton href="/resume">이력서</NavigationButton>
      <NavigationButton buttonType="outlined" href="/">
        로그인
      </NavigationButton>
    </Navigation>
  ),
};

export const InvertedBackground: Story = {
  args: {
    invertBackground: true,
  },
  render: args => (
    <Navigation {...args}>
      <NavigationButton href="/recommend">맞춤채용공고</NavigationButton>
      <NavigationButton href="/resume">이력서</NavigationButton>
      <NavigationButton buttonType="outlined" href="/">
        로그인
      </NavigationButton>
    </Navigation>
  ),
};
