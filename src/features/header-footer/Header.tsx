'use client';

import Navigation from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';

const Header = () => {
  return (
    <Navigation>
      <NavigationButton href={'/announcement'}>맞춤채용공고</NavigationButton>
      <NavigationButton href={'/resume'}>이력서</NavigationButton>
      <NavigationButton href="/signin" buttonType="outlined">
        로그인
      </NavigationButton>
    </Navigation>
  );
};

export default Header;
