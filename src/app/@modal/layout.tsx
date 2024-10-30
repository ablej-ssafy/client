import {ReactNode} from 'react';

import Backdrop from '@/components/common/Backdrop';
import Modal from '@/components/common/Modal';

const ModalLayout = ({children}: {children: ReactNode}) => {
  return (
    <Backdrop>
      <Modal>{children}</Modal>
    </Backdrop>
  );
};

export default ModalLayout;
