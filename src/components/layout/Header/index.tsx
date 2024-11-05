import SearchButton from '@/components/common/SearchButton';
import Navigation, {NavigationProps} from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';
import NavigationButtonContainer from '@/components/layout/NavigationButtonContainer';
import NavigationLinkContainer from '@/components/layout/NavigationLinkContainer';

import LoginButton from '../../../app/components/LoginButton';

const Header = (props: NavigationProps) => {
  return (
    <Navigation {...props}>
      <NavigationButtonContainer>
        <NavigationLinkContainer>
          <NavigationButton
            href="/announcement"
            invert={props.invert}
            // selected={pathname.includes('/announcement')}
          >
            AI 맞춤채용공고
          </NavigationButton>
          <NavigationButton
            href="/resume"
            invert={props.invert}
            // selected={pathname.includes('/resume')}
          >
            채용공고
          </NavigationButton>
          <NavigationButton
            href="/portfolio"
            invert={props.invert}
            // selected={pathname.includes('/portfolio')}
          >
            포트폴리오
          </NavigationButton>
          <NavigationButton
            href="/resume"
            invert={props.invert}
            // selected={pathname.includes('/resume')}
          >
            이력서
          </NavigationButton>
        </NavigationLinkContainer>
        <SearchButton />
        <LoginButton invert={props.invert} />
      </NavigationButtonContainer>
    </Navigation>
  );
};

export default Header;
