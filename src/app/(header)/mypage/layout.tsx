'use client';

import classNames from 'classnames/bind';
import {usePathname} from 'next/navigation';
import {PropsWithChildren} from 'react';

import Sidebar from '@/features/mypage/Sidebar';
import SidebarButton from '@/features/mypage/SidebarButton';
import SidebarDivider from '@/features/mypage/SidebarDivider';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const URL = {
  PROFILE: '/mypage',
  SCRAP: '/mypage/scrap',
} as const;

const MyPageLayout = ({children}: PropsWithChildren) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className={cx('my-page')}>
      <Sidebar>
        <SidebarButton href={URL.PROFILE} selected={pathname === URL.PROFILE}>
          프로필
        </SidebarButton>
        <SidebarButton href={URL.SCRAP} selected={pathname === URL.SCRAP}>
          스크랩
        </SidebarButton>
        <SidebarDivider />
        <SidebarButton href="/" warning>
          로그아웃
        </SidebarButton>
      </Sidebar>
      {children}
    </div>
  );
};

export default MyPageLayout;
