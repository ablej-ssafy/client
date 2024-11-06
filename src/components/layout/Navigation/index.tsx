import classNames from 'classnames/bind';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

export interface NavigationProps extends PropsWithChildren {
  invert?: boolean;
}

const Navigation = ({children, invert}: NavigationProps) => {
  return (
    <nav className={cx('navigation', {invert: invert})}>
      <Link className={cx('title', {invert: invert})} href={'/'}>
        AI HeadHunting
      </Link>
      <div className={cx('nav-button-container')}>{children}</div>
    </nav>
  );
};

export default Navigation;
