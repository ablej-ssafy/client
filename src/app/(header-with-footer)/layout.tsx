import type {ReactNode} from 'react';

import Navigation from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navigation>
        <NavigationButton href={'/'}>맞춤채용공고</NavigationButton>
        <NavigationButton href={'/'}>회원가입</NavigationButton>
        <NavigationButton buttonType="outlined" href={'/'}>
          로그인
        </NavigationButton>
      </Navigation>
      {children}
    </>
  );
};

export default MainPageLayout;
