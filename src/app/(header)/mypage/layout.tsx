import classNames from 'classnames/bind';
import {PropsWithChildren} from 'react';

import Sidebar from '@/features/mypage/Sidebar';
import SidebarButton from '@/features/mypage/SidebarButton';
import SidebarDivider from '@/features/mypage/SidebarDivider';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const MyPageLayout = ({children}: PropsWithChildren) => {
  return (
    <div className={cx('my-page')}>
      <Sidebar>
        <SidebarButton href="/" selected>
          프로필
        </SidebarButton>
        <SidebarButton href="/">스크랩</SidebarButton>
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
