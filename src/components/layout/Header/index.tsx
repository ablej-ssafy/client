'use client';

import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

import Navigation, {NavigationProps} from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';
import auth from '@/utils/auth';

const STATIC_NAVIGATION_PATH = ['/announcement', '/resume', '/mypage'];

const Header = (props: NavigationProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const isStatic = STATIC_NAVIGATION_PATH.some(path =>
    pathname.startsWith(path),
  );

  useEffect(() => {
    setIsLoggedIn(auth.getLoginStatus());
  }, []);

  return (
    <Navigation {...props} staticPosition={isStatic}>
      <NavigationButton href="/announcement">맞춤채용공고</NavigationButton>
      <NavigationButton href="/resume">이력서</NavigationButton>
      {isLoggedIn ? (
        <NavigationButton href="/mypage">마이페이지</NavigationButton>
      ) : (
        <NavigationButton href="/signin" buttonType="outlined">
          로그인
        </NavigationButton>
      )}
    </Navigation>
  );
};

export default Header;
