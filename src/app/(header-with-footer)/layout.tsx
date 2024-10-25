'use client';

import {ReactNode} from 'react';

import ModalProvider from '@/components/layout/Modal/ModalProvider';
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
    </>
  );
};

export default MainPageLayout;
