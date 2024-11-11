import classNames from 'classnames/bind';
import {useRouter} from 'next/navigation';
import type {HTMLAttributes, ReactNode} from 'react';
import {forwardRef} from 'react';
import {MdClose} from 'react-icons/md';

import styles from './modal.module.scss';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({children, ...props}, ref) => {
    const router = useRouter();

    return (
      <div {...props} ref={ref} className={cx('modal')}>
        <button className={cx('close-button')} onClick={() => router.back()}>
          <MdClose size="24" />
        </button>
        {children}
      </div>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
