'use client';

import classNames from 'classnames/bind';
import type {Variants} from 'framer-motion';
import * as motion from 'framer-motion/client';
import Link from 'next/link';
import {PropsWithChildren, useEffect, useState} from 'react';

import useScrollHeight from '@/hooks/useScrollHeight';
import useWindowHeight from '@/hooks/useWindowHeight';

import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

const navVarients: Variants = {
  normal: {
    transition: {duration: 0.3},
  },
  inverted: {
    backgroundColor: '#6e55ff',
    transition: {duration: 0.3},
  },
};

const Navigation = ({children}: PropsWithChildren) => {
  const windowHeight = useWindowHeight();
  const scrollHeight = useScrollHeight();
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    if (scrollHeight >= windowHeight) {
      setInverted(true);
    } else {
      setInverted(false);
    }
  }, [scrollHeight, windowHeight]);

  return (
    <motion.nav
      className={cx('navigation', {inverted: inverted})}
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
