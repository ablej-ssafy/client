'use client';

import {useState} from 'react';

import SignModal from '@/components/signin/SignModal';

const SignInPage = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const onClickSignIn = () => {
    setSignInOpen(true);
  };

  return (
    <div>
      <h1 onClick={onClickSignIn}>로그인</h1>
      {signInOpen && <SignModal setSignInOpen={setSignInOpen} />}
    </div>
  );
};

export default SignInPage;
