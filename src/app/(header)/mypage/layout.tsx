'use client';

import classNames from 'classnames/bind';
import {usePathname} from 'next/navigation';
import {PropsWithChildren} from 'react';

import SidebarLogoutButton from '@/features/auth/SidebarLogoutButton';
import Sidebar from '@/features/mypage/Sidebar';
import SidebarButton from '@/features/mypage/SidebarButton';
import SidebarDivider from '@/features/mypage/SidebarDivider';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const URL = {
  PROFILE: '/mypage',
  SCRAP: '/mypage/scrap',
  GITHUB: '/mypage/github',
} as const;

const MyPageLayout = ({children}: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <div className={cx('my-page')}>
      <Sidebar>
        <SidebarButton
          buttonType="link"
          href={URL.PROFILE}
          selected={pathname === URL.PROFILE}
        >
          프로필
        </SidebarButton>
        <SidebarButton
          buttonType="link"
          href={URL.SCRAP}
          selected={pathname === URL.SCRAP}
        >
          스크랩
        </SidebarButton>
        <SidebarButton
          buttonType="link"
          href={URL.GITHUB}
          selected={pathname === URL.GITHUB}
        >
          깃허브 분석
        </SidebarButton>
        <SidebarDivider />
        <SidebarLogoutButton />
      </Sidebar>
      {children}
    </div>
  );
};

export default MyPageLayout;
