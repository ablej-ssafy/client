import type {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import LandingHeader from '@/components/layout/LandingHeader';
import LoginButton from '@/components/layout/LoginButton';

const LandingLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <LandingHeader rightComponent={<LoginButton />} />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
