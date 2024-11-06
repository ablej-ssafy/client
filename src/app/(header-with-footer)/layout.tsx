import type {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import GeneralHeader from '@/components/layout/GeneralHeader';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <GeneralHeader />
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
