import {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navigation invertBackground position={'static'}>
        <NavigationButton href={'/announcement'}>맞춤채용공고</NavigationButton>
        <NavigationButton href={'/resume'}>이력서</NavigationButton>
        <NavigationButton buttonType="outlined" href={'/'}>
          로그인
        </NavigationButton>
      </Navigation>
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
