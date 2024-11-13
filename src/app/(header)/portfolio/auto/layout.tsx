import classNames from 'classnames/bind';
import {ReactNode} from 'react';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const AutoLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className={cx('container')}>
      <main className={cx('main')}>{children}</main>
    </div>
  );
};

export default AutoLayout;
