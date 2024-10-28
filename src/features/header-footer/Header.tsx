'use client';

import Navigation from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';
import useModalStore from '@/zustand/useModalStore';

const Header = () => {
  const setModalOpen = useModalStore(state => state.setModalOpen);

  return (
    <Navigation>
      <NavigationButton href={'/announcement'}>맞춤채용공고</NavigationButton>
      <NavigationButton href={'/resume'}>이력서</NavigationButton>
      <NavigationButton
        href={''}
        buttonType="outlined"
        signinOpen={() => setModalOpen(true)}
      >
        로그인
      </NavigationButton>
    </Navigation>
  );
};

export default Header;
