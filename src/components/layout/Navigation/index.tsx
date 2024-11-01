'use client';

import classNames from 'classnames/bind';
import type {Variants} from 'framer-motion';
import * as motion from 'framer-motion/client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {PropsWithChildren} from 'react';

import useInvertNavigation from '@/hooks/useInvertNavigation';

import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

export interface NavigationProps extends PropsWithChildren {
  invertBackground?: boolean;
}

const STATIC_NAVIGATION_PATH = ['/announcement', '/resume', '/mypage'];

const navVarients: Variants = {
  normal: {
    transition: {duration: 0.3},
  },
  inverted: {
    backgroundColor: '#6e55ff',
    transition: {duration: 0.3},
  },
};

const Navigation = ({children, invertBackground}: NavigationProps) => {
  const pathname = usePathname();
  const staticPosition = STATIC_NAVIGATION_PATH.some(path =>
    pathname.startsWith(path),
  );
  const inverted = useInvertNavigation(1);

  return (
    <motion.nav
      className={cx(
        'navigation',
        {static: staticPosition},
        {inverted: invertBackground},
      )}
      variants={navVarients}
      initial={'normal'}
      animate={inverted ? 'inverted' : 'normal'}
    >
      <Link className={cx('title')} href={'/'}>
        AI HeadHunting
      </Link>
      <ul className={cx('nav-items')}>{children}</ul>
    </motion.nav>
  );
};

export default Navigation;
