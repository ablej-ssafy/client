'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useFormState} from 'react-dom';
import {FcGoogle} from 'react-icons/fc';
import {RiKakaoTalkFill} from 'react-icons/ri';

import loginAction from '@/actions/loginAction';
import Input from '@/components/common/Input';
import Index from '@/features/auth/SocialIcon';

import styles from './loginStep.module.scss';

const cx = classNames.bind(styles);

const INITIAL_STATE = {email: [], password: [], error: '', success: false};

interface LoginStepProps {
  isModal?: boolean;
}

const LoginStep = ({isModal = false}: LoginStepProps) => {
  const [state, formAction] = useFormState(loginAction, INITIAL_STATE);
  const router = useRouter();

  if (state.success) {
    router.back();
  }

  return (
    <div className={cx('container')}>
      <p className={cx('text-header')}>시작하기</p>
      <p className={cx('text-content')}>
        지금 로그인하고 AI로 채용공고를 추천받아보세요.
      </p>
      <form action={formAction} className={cx('signin-form')}>
        <div className={cx('input-container')}>
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
        </div>
        {state && state.error && <p className={cx('error')}>{state.error}</p>}
        <button type="submit" className={cx('button', 'sign-in')}>
          로그인
        </button>
      </form>
      {isModal ? (
        <Link className={cx('button', 'sign-up')} href={'/signup'} replace>
          회원가입
        </Link>
      ) : (
        <a
          className={cx('button', 'sign-up')}
          href={process.env.NEXT_PUBLIC_NEXT_SERVER_URL + '/signup'}
        >
          회원가입
        </a>
      )}

      <div className={cx('line')}>
        <div className={cx('border-line')} />
        <p>OR</p>
        <div className={cx('border-line')} />
      </div>
      <div className={cx('social')}>
        <Index social="google">
          <FcGoogle size={25} />
        </Index>
        <Index social="kakao">
          <RiKakaoTalkFill size={25} color="#191919" />
        </Index>
      </div>
    </div>
  );
};

export default LoginStep;