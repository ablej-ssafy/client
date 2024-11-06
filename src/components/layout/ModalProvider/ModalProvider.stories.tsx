import type {Meta, StoryObj} from '@storybook/react';

import useModalStore from '@/zustand/useModalStore';

import ModalProvider from './';

const meta: Meta<typeof ModalProvider> = {
  title: 'Layout/ModalProvider',
  component: ModalProvider,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ModalProvider>;

// 기본 모달
export const Default: Story = {
  args: {
    children: <div style={{padding: '40px'}}>모달 내용</div>,
    border: false,
  },
  play: () => {
    const {setModalOpen} = useModalStore.getState();
    setModalOpen(true);
  },
};

// border radius가 적용된 모달
export const WithBorder: Story = {
  args: {
    children: <div style={{padding: '40px'}}>테두리가 있는 모달 내용</div>,
    border: true,
  },
  play: () => {
    const {setModalOpen} = useModalStore.getState();
    setModalOpen(true);
  },
};
