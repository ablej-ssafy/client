'use client';

import classNames from 'classnames/bind';
import {Dispatch, SetStateAction} from 'react';
import {useForm} from 'react-hook-form';
import {FcGoogle} from 'react-icons/fc';
import {RiKakaoTalkFill} from 'react-icons/ri';

import Input from '@/components/common/Input';
import {SIGN_STEP} from '@/features/signin/SignIn/SignModal';
import SocialIcon from '@/features/signin/SignIn/SocialIcon';

import styles from './signinInput.module.scss';

const cx = classNames.bind(styles);

interface SigninForm {
  email: string;
  password: string;
}

interface SigninInputProps {
  setStep: Dispatch<SetStateAction<SIGN_STEP>>;
}

const SigninInput = ({setStep}: SigninInputProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SigninForm>();

  const onSubmit = (data: SigninForm) => {
    console.log(data);
  };

  const onInValid = (errors: object) => {
    console.log(errors);
  };

  const handleSignUp = () => {
    setStep(SIGN_STEP.USERINFO);
  };

  return (
    <div className={styles.container}>
      <p className={styles['text-header']}>시작하기</p>
      <p className={styles['text-content']}>
        지금 로그인하고 AI로 채용공고를 추천받아보세요.
      </p>
      <form
        className={styles['signin-form']}
        onSubmit={handleSubmit(onSubmit, onInValid)}
      >
        <Input
          placeholder="이메일"
          {...register('email', {required: '이메일을 입력해주세요'})}
          errors={errors}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
          errors={errors}
        />
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
        {/* <SocialIcon>
            <AiFillGithub size={25} />
          </SocialIcon> */}
      </div>
    </div>
  );
};

export default SigninInput;
