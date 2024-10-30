'use client';

import {useFormState} from 'react-dom';

import signupAction from '@/actions/signupAction';
import Slider from '@/components/common/Slider';
import {useSignupForm} from '@/context/signup-context';
import JobComboBox from '@/features/signin/JobComboBox';

import styles from './careerStep.module.scss';

const INITIAL_STATE = {
  email: [],
  password: [],
  name: [],
  careerYear: [],
  jobIds: [],
  error: '',
};

const CareerStep = () => {
  const [, formAction] = useFormState(signupAction, INITIAL_STATE);
  const [prevForm] = useSignupForm();

  return (
    <form className={styles['signup-form']} action={formAction}>
      <input name="email" value={prevForm.email} readOnly hidden />
      <input name="password" value={prevForm.password} readOnly hidden />
      <input name="name" value={prevForm.name} readOnly hidden />
      <JobComboBox />
      <Slider max={25} name="age" value={0} fill label="경력" />
      <button type="submit" className={styles.button}>
        회원가입 완료
      </button>
    </form>
  );
};

export default CareerStep;
