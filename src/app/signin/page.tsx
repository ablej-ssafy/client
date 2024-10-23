'use client';

import {useState} from 'react';

import SigninModal from '@/components/signin/SigninModal';
import SignupModal from '@/components/signin/SignupModal';

const SignInPage = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const onClickSignIn = () => {
    console.log('click signin');
    setSignInOpen(true);
  };

  const onClickSignUp = () => {
    console.log('click Signup');
    setSignUpOpen(true);
  };

  return (
    <div>
      <h1 onClick={onClickSignIn}>로그인</h1>
      <h1 onClick={onClickSignUp}>회원가입</h1>
      {signInOpen && <SigninModal setSignInOpen={setSignInOpen} />}
      {signUpOpen && <SignupModal setSignUpOpen={setSignUpOpen} />}
    </div>
  );
};

export default SignInPage;
