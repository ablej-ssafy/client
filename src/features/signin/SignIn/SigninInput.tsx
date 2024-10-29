'use client';

import classNames from 'classnames/bind';
import {Dispatch, SetStateAction} from 'react';
import {useFormState} from 'react-dom';
import {FcGoogle} from 'react-icons/fc';
import {RiKakaoTalkFill} from 'react-icons/ri';

import loginAction from '@/actions/loginAction';
import Input from '@/components/common/Input';
import {SIGN_STEP} from '@/features/signin/SignIn/SignModal';
import SocialIcon from '@/features/signin/SignIn/SocialIcon';

import styles from './signinInput.module.scss';

const cx = classNames.bind(styles);

interface SigninInputProps {
  setStep: Dispatch<SetStateAction<SIGN_STEP>>;
}

const INITIAL_STATE = {email: [], password: [], error: ''};

const SigninInput = ({setStep}: SigninInputProps) => {
  const [state, formAction] = useFormState(loginAction, INITIAL_STATE);

  const handleSignUp = () => {
    setStep(SIGN_STEP.USERINFO);
  };

  return (
    <div className={styles.container}>
      <p className={styles['text-header']}>시작하기</p>
      <p className={styles['text-content']}>
        지금 로그인하고 AI로 채용공고를 추천받아보세요.
      </p>
      <form action={formAction} className={styles['signin-form']}>
        <Input
          placeholder="이메일"
          type="email"
          inputStyle="primary"
          name="email"
          error={state?.email}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          inputStyle="primary"
          name="password"
          error={state?.password}
        />
        {state && state.error && (
          <p className={styles['error']}>{state.error}</p>
        )}
        <button type="submit" className={cx('button', 'sign-in')}>
          로그인
        </button>
      </form>
      <button className={cx('button', 'sign-up')} onClick={handleSignUp}>
        회원가입
      </button>

      <div className={styles['line']}>
        <div className={styles['border-line']} />
        <p>OR</p>
        <div className={styles['border-line']} />
      </div>

      <div className={styles.social}>
        <SocialIcon social="google">
          <FcGoogle size={25} />
        </SocialIcon>
        <SocialIcon social="kakao">
          <RiKakaoTalkFill size={25} color="#191919" />
        </SocialIcon>
      </div>
    </div>
  );
};

export default SigninInput;
