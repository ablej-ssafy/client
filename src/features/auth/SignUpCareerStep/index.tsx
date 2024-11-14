'use client';

import classNames from 'classnames/bind';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import signupAction from '@/actions/signupAction';
import Slider from '@/components/common/Slider';
import {useSignupForm} from '@/context/SignupContext';
import JobComboBox from '@/features/auth/JobComboBox';

import styles from './signupCareerStep.module.scss';

const cx = classNames.bind(styles);

const INITIAL_STATE = {
  email: [],
  password: [],
  name: [],
  careerYear: [],
  jobId: [],
  error: '',
  success: false,
};

const SignUpCareerStep = () => {
  const [prevForm] = useSignupForm();
  const [state, formAction] = useFormState(signupAction, INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [router, state]);

  useEffect(() => {
    if (!state.success) return;
    toast.success('회원가입을 성공하였습니다');
    router.back();
  }, [router, state]);

  return (
    <form className={cx('signup-form')} action={formAction}>
      <p className={cx('text-header')}>이제 곧 시작</p>
      <p className={cx('text-content')}>
        회원가입을 하시면 AI 큐레이팅을 사용할 수 있습니다.
      </p>
      <input name="email" value={prevForm.email} readOnly hidden />
      <input name="password" value={prevForm.password} readOnly hidden />
      <input name="name" value={prevForm.name} readOnly hidden />
      <div className={cx('input-container')}>
        <JobComboBox />
        <Slider max={25} name="careerYear" value={0} fill label="경력" />
      </div>
      <button type="submit" className={cx('button')}>
        회원가입
      </button>
    </form>
  );
};

export default SignUpCareerStep;
