'use client';

import classNames from 'classnames/bind';
import {useFormState} from 'react-dom';

import signupAction from '@/actions/signupAction';
import Slider from '@/components/common/Slider';
import {useSignupForm} from '@/context/signup-context';
import JobComboBox from '@/features/signin/JobComboBox';

import styles from './signupCareerStep.module.scss';

const cx = classNames.bind(styles);

const INITIAL_STATE = {
  email: [],
  password: [],
  name: [],
  careerYear: [],
  jobIds: [],
  error: '',
};

const SignUpCareerStep = () => {
  const [, formAction] = useFormState(signupAction, INITIAL_STATE);
  const [prevForm] = useSignupForm();

  return (
    <form className={cx('signup-form')} action={formAction}>
      <p className={cx('text-header')}>이제 곧 시작</p>
      <p className={cx('text-content')}>얼마 안남았어요...!</p>
      <p className={cx('text-content')}>
        회원가입을 하시면 AI 큐레이팅을 사용할 수 있습니다.
      </p>
      <input name="email" value={prevForm.email} readOnly hidden />
      <input name="password" value={prevForm.password} readOnly hidden />
      <input name="name" value={prevForm.name} readOnly hidden />
      <div className={cx('input-container')}>
        <JobComboBox />
        <Slider max={25} name="age" value={0} fill label="경력" />
      </div>
      <button type="submit" className={cx('button')}>
        회원가입 완료
      </button>
    </form>
  );
};

export default SignUpCareerStep;
