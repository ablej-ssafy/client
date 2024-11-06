'use client';

import classNames from 'classnames/bind';
import {PropsWithChildren} from 'react';

import DragAndDropMenu from '@/features/portfolio/components/DragAndDropMenu';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const PortFolioLayout = ({children}: PropsWithChildren) => {
  return (
    <div className={cx('container')}>
      <main className={cx('main')}>{children}</main>
      <aside className={cx('sidebar')}>
        <DragAndDropMenu />
      </aside>
    </div>
  );
};

export default PortFolioLayout;
