import {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
