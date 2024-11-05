import {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import LandingHeader from '@/components/layout/LandingHeader';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <LandingHeader />
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
