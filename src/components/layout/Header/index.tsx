import Navigation, {NavigationProps} from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';
import auth from '@/utils/auth';

const Header = async (props: NavigationProps) => {
  const isLoggedIn = auth.getLoginStatus();

  console.log(isLoggedIn);

  return (
    <Navigation {...props}>
      <NavigationButton href="/announcement">맞춤채용공고</NavigationButton>
      <NavigationButton href="/resume">이력서</NavigationButton>
      {isLoggedIn ? (
        <NavigationButton href="/mypage">마이페이지</NavigationButton>
      ) : (
        <NavigationButton href="/signin" buttonType="outlined">
          로그인
        </NavigationButton>
      )}
    </Navigation>
  );
};

export default Header;
