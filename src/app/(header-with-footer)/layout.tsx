import {ReactNode} from 'react';

import Footer from '@/components/layout/Footer';
import ModalProvider from '@/components/layout/ModalProvider';
import Header from '@/features/header-footer/Header';
import SignModal from '@/features/signin/SignIn/SignModal';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header />
      {children}
      <ModalProvider border>
        <SignModal />
      </ModalProvider>
      <Footer />
    </>
  );
};

export default MainPageLayout;
