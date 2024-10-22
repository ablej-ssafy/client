import classNames from 'classnames/bind';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

const Navigation = ({children}: PropsWithChildren) => {
  return (
    <nav className={cx('navigation')}>
      <Link className={cx('title')} href={'/'}>
        AI HeadHunting
      </Link>
      <ul className={cx('nav-items')}>{children}</ul>
    </nav>
  );
};

export default Navigation;
