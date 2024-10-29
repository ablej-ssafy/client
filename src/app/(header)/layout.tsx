'use client';

import type {ReactNode} from 'react';

import ModalProvider from '@/components/layout/ModalProvider';
import Navigation from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';
import SignModal from '@/features/signin/SignIn/SignModal';
import useModalStore from '@/zustand/useModalStore';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  const setModalOpen = useModalStore(state => state.setModalOpen);
  return (
    <>
      <Navigation invertBackground position={'static'}>
        <NavigationButton href={'/announcement'}>맞춤채용공고</NavigationButton>
        <NavigationButton href={'/resume'}>이력서</NavigationButton>
        <NavigationButton
          buttonType="outlined"
          href={'/'}
          signinOpen={() => setModalOpen(true)}
        >
          로그인
        </NavigationButton>
      </Navigation>
      <ModalProvider border>
        <SignModal />
      </ModalProvider>
      {children}
    </>
  );
};

export default MainPageLayout;
