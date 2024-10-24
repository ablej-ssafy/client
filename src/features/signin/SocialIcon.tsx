'use client';

import classNames from 'classnames/bind';
import {ReactNode} from 'react';

import styles from './socialIcon.module.scss';

const cx = classNames.bind(styles);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
  return <div className={cx('social-circle')}>{children}</div>;
};

export default SocialIcon;
