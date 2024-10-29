import type {Meta, StoryObj} from '@storybook/react';

import NavigationButton from './index';

const meta: Meta<typeof NavigationButton> = {
  title: 'Layout/NavigationButton',
  component: NavigationButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof NavigationButton>;

export const Default: Story = {
  args: {
    href: '/home',
    children: 'Home',
    selected: false,
  },
};

export const OutlinedButton: Story = {
  args: {
    buttonType: 'outlined',
    children: 'Sign In',
    signinOpen: () => alert('Sign In button clicked'),
  },
};

export const SelectedLinkButton: Story = {
  args: {
    href: '/about',
    children: 'About',
    selected: true,
  },
};