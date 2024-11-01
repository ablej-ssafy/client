import type {Meta, StoryObj} from '@storybook/react';

import Input from './index';

const meta = {
  title: 'Common/Input',
  component: Input,
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    inputStyle: 'primary',
    widthSize: 'fill',
    name: 'primaryInput',
    placeholder: 'Primary Input',
  },
};

export const Secondary: Story = {
  args: {
    inputStyle: 'secondary',
    widthSize: 'free',
    width: 200,
    name: 'secondaryInput',
    placeholder: 'Secondary Input',
  },
};

export const PrimaryWithError: Story = {
  args: {
    inputStyle: 'primary',
    widthSize: 'fill',
    name: 'errorInput',
    placeholder: 'Input with Error',
  },
};
