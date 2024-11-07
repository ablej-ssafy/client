import {cookies} from 'next/headers';

import NavigationButton from '@/components/layout/NavigationButton';

const LoginButton = async () => {
  const isLoggedIn = cookies().get('authenticated');

  return isLoggedIn ? (
    <NavigationButton href="/mypage" login>
      마이페이지
    </NavigationButton>
  ) : (
    <NavigationButton href="/signin" login>
      로그인
    </NavigationButton>
  );
};

export default LoginButton;
