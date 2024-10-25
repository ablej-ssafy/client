'use client';

import {useForm} from 'react-hook-form';

import Input from '@/components/common/Input';
import {SIGN_STEP} from '@/features/signin/SignIn/SignModal';

import styles from './infoInput.module.scss';

interface SignupForm {
  email: string;
  password: string;
  password_confirm: string;
  name: string;
}

interface InfoInputProps {
  setStep: (value: SIGN_STEP) => void;
}

const InfoInput = ({setStep}: InfoInputProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupForm>();

  const onSubmit = (data: SignupForm) => {
    console.log(data);
    setStep(SIGN_STEP.CAREER);
  };

  const onInValid = (errors: object) => {
    console.log(errors);
  };
  return (
    <form
      className={styles['signup-form']}
      onSubmit={handleSubmit(onSubmit, onInValid)}
    >
      <label htmlFor="email" className={styles['form-label']}>
        이메일
      </label>
      <Input
        placeholder="이메일"
        {...register('email', {required: '이메일을 입력해주세요'})}
        errors={errors}
      />
      <label htmlFor="password" className={styles['form-label']}>
        비밀번호
      </label>
      <Input
        placeholder="비밀번호"
        type="password"
        {...register('password', {
          required: '비밀번호를 입력해주세요',
        })}
        errors={errors}
      />
      <label htmlFor="password_confirm" className={styles['form-label']}>
        비밀번호 확인
      </label>
      <Input
        placeholder="비밀번호 확인"
        type="password"
        {...register('password_confirm', {
          required: '비밀번호를 다시 입력해주세요',
        })}
        errors={errors}
      />
      <label htmlFor="name" className={styles['form-label']}>
        이름
      </label>
      <Input
        placeholder="이름"
        {...register('name', {
          required: '이름을 입력해주세요',
        })}
        errors={errors}
      />
      <button type="submit" className={styles.button}>
        다음
      </button>
    </form>
  );
};

export default InfoInput;
