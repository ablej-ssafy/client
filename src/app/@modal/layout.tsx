'use client';

import {useRouter} from 'next/navigation';
import {ReactNode, useRef} from 'react';

import Backdrop from '@/components/common/Backdrop';
import Modal from '@/components/common/Modal';
import useClickOutside from '@/hooks/useClickOutside';
import usePreventScroll from '@/hooks/usePreventScroll';

const ModalLayout = ({children}: {children: ReactNode}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => router.back());
  usePreventScroll();

  return (
    <Backdrop>
      <Modal ref={ref}>{children}</Modal>
    </Backdrop>
  );
};

export default ModalLayout;
