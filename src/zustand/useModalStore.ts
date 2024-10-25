import {create} from 'zustand';

interface ModalState {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

const useModalStore = create<ModalState>(set => ({
  modalOpen: false,
  setModalOpen: (modalOpen: boolean) => set({modalOpen}),
}));

export default useModalStore;
