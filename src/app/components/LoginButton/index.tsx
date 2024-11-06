import {cookies} from 'next/headers';

import {NavigationProps} from '@/components/layout/Navigation';
import NavigationButton from '@/components/layout/NavigationButton';

type LoginButtonProps = NavigationProps;

const LoginButton = async (props: LoginButtonProps) => {
  const isLoggedIn = cookies().get('authenticated');

  return isLoggedIn ? (
    <NavigationButton href="/mypage" invert={props.invert}>
      마이페이지
    </NavigationButton>
  ) : (
    <NavigationButton href="/signin" outlined invert={props.invert} selected>
      로그인
    </NavigationButton>
  );
};

export default LoginButton;
