import {Metadata} from 'next';

import LoginStep from '@/features/auth/LoginStep';

export const metadata: Metadata = {
  title: '로그인',
};

const SignInPage = () => {
  return <LoginStep />;
};

export default SignInPage;
