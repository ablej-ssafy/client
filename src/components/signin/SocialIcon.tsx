'use client';

import classNames from 'classnames/bind';

import styles from './socialIcon.module.scss';

const cx = classNames.bind(styles);

interface SocialIconProps {
  children: React.ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
  return <div className={cx('social-circle')}>{children}</div>;
};

export default SocialIcon;
