import classNames from 'classnames/bind';
import type {HTMLAttributes, ReactNode} from 'react';
import {forwardRef} from 'react';

import styles from './modal.module.scss';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({children, ...props}, ref) => {
    return (
      <div {...props} ref={ref} className={cx('modal')}>
        {children}
      </div>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
