import type {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import LandingHeader from '@/components/layout/LandingHeader';

const LandingLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <LandingHeader />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
