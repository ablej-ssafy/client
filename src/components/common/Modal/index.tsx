import classNames from 'classnames/bind';
import type {HTMLAttributes, ReactNode} from 'react';

import styles from './modal.module.scss';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Modal = ({children, ...props}: ModalProps) => {
  return (
    <div {...props} className={cx('modal')}>
      {children}
    </div>
  );
};

export default Modal;
