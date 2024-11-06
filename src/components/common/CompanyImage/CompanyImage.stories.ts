import type {Meta, StoryObj} from '@storybook/react';

import CompanyImage from './';

const meta = {
  title: 'Common/CompanyImage',
  component: CompanyImage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CompanyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://i.namu.wiki/i/PagwakcE00JZaGpEvXym79-IMvKFBmdqOBlq778J-bvJMwz15lDLleTKc56S2wwcRcaEm3FZZ4EtniRa5bXdeQ.webp',
    alt: '샘플 이미지',
    width: 5,
    height: 3,
  },
};
