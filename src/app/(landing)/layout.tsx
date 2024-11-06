import type {ReactNode} from 'react';

import LoginButton from '@/app/components/LoginButton';
import Footer from '@/components/layout/Footer';
import LandingHeader from '@/components/layout/LandingHeader';

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
