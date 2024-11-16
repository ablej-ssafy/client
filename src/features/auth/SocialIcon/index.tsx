'use client';

import classNames from 'classnames/bind';
import {ReactNode} from 'react';

import styles from './socialIcon.module.scss';

const cx = classNames.bind(styles);

interface SocialIconProps {
  children: ReactNode;
  social: string;
}

const SocialIcon = ({children, social}: SocialIconProps) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const host = process.env.NEXT_PUBLIC_BASE_URL;

  const REDIRECT_URI = `${host}/callback/auth`;

  const KAKAO_AUTH_URL = `${BASE_URL}/oauth2/authorization/kakao?oauth_redirect_uri=${REDIRECT_URI}`;
  const GOOGLE_AUTH_URL = `${BASE_URL}/oauth2/authorization/google?oauth_redirect_uri=${REDIRECT_URI}`;

  const handleClick = () => {
    if (social === 'kakao') {
      window.location.href = KAKAO_AUTH_URL;
      return;
    }

    if (social === 'google') {
      window.location.href = GOOGLE_AUTH_URL;
      return;
    }
  };

  return (
    <div className={cx('social-circle')} onClick={handleClick}>
      {children}
    </div>
  );
};

export default SocialIcon;
