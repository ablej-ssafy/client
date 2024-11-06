import type {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import GeneralHeader from '@/components/layout/GeneralHeader';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <GeneralHeader />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainPageLayout;
