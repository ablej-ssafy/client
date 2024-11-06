import type {Meta, StoryObj} from '@storybook/react';

import LabelInput from './';

const meta = {
  title: 'Common/LabelInput',
  component: LabelInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    inputStyle: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    widthSize: {
      control: 'radio',
      options: ['fill', 'free'],
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Label',
    inputStyle: 'primary',
    widthSize: 'fill',
    color: '#000000',
    name: 'primaryLabelInput',
    placeholder: 'Enter text...',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    inputStyle: 'secondary',
    widthSize: 'free',
    width: 200,
    color: '#333333',
    name: 'secondaryLabelInput',
    placeholder: 'Enter text...',
  },
};
