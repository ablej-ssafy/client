'use client';

import classNames from 'classnames/bind';
import {ReactNode} from 'react';
import {RxCross2} from 'react-icons/rx';

import useModalStore from '@/zustand/useModalStore';

import styles from './modalProvider.module.scss';

const cx = classNames.bind(styles);

interface ModalProviderProps {
  children: ReactNode;
  border?: boolean;
}

const ModalProvider = ({children, border}: ModalProviderProps) => {
  const {modalOpen, setModalOpen} = useModalStore(state => state);
  return (
    <>
      {modalOpen && (
        <div className={styles['modal-overlay']}>
          <div className={cx('modal-content', {border})}>
            <RxCross2
              className={styles.close}
              size={20}
              onClick={() => setModalOpen(false)}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalProvider;
