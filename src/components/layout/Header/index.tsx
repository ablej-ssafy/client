'use client';

import {usePathname} from 'next/navigation';
import {ReactNode} from 'react';

import SearchButton from '@/components/common/SearchButton';
import Navigation, {NavigationProps} from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';
import NavigationButtonContainer from '@/components/layout/NavigationButtonContainer';
import NavigationLinkContainer from '@/components/layout/NavigationLinkContainer';

export interface HeaderProps extends NavigationProps {
  rightComponent?: ReactNode;
}

const Header = ({rightComponent, ...props}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <Navigation {...props}>
      <NavigationButtonContainer>
        <NavigationLinkContainer>
          <NavigationButton
            href="/recommend"
            invert={props.invert}
            selected={pathname.includes('/recommend')}
          >
            AI 맞춤채용공고
          </NavigationButton>
          <NavigationButton
            href="/recruitments"
            invert={props.invert}
            selected={pathname.includes('/recruitments')}
          >
            채용공고
          </NavigationButton>
          <NavigationButton
            href="/portfolio"
            invert={props.invert}
            selected={pathname.includes('/portfolio')}
          >
            포트폴리오
          </NavigationButton>
          <NavigationButton
            href="/resume"
            invert={props.invert}
            selected={pathname.includes('/resume')}
          >
            이력서
          </NavigationButton>
        </NavigationLinkContainer>
        <SearchButton />
        {rightComponent}
      </NavigationButtonContainer>
    </Navigation>
  );
};

export default Header;
