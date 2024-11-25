'use client';

import {usePathname, useRouter} from 'next/navigation';
import {ReactNode, useRef} from 'react';

import Backdrop from '@/components/common/Backdrop';
import Modal from '@/components/common/Modal';
import useClickOutside from '@/hooks/useClickOutside';

const MODAL_PATHS = ['/signin', '/signup', '/verify-email'];

const ModalLayout = ({children}: {children: ReactNode}) => {
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => router.back());

  if (!MODAL_PATHS.includes(pathname)) return null;

  return (
    <Backdrop>
      <Modal ref={ref}>{children}</Modal>
    </Backdrop>
  );
};

export default ModalLayout;
