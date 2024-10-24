'use client';

import {useForm} from 'react-hook-form';

import SignInput from '@/components/signin/SignInput';
import {SignSTEP} from '@/components/signin/SignModal';

import styles from './infoInput.module.scss';

interface SignupForm {
  email: string;
  password: string;
  password_confirm: string;
  name: string;
}

interface InfoInputProps {
  setStep: (value: SignSTEP) => void;
}

const InfoInput = ({setStep}: InfoInputProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupForm>();

  const onSubmit = (data: SignupForm) => {
    console.log(data);
    setStep(SignSTEP.CAREER);
  };

  const onInValid = (errors: object) => {
    console.log(errors);
  };
  return (
    <form
      className={styles['signup-form']}
      onSubmit={handleSubmit(onSubmit, onInValid)}
    >
      <p className={styles['form-label']}>이메일</p>
      <SignInput
        name="이메일"
        placeholder="이메일"
        register={register('email', {required: '이메일을 입력해주세요'})}
        errors={errors}
      />
      <p className={styles['form-label']}>비밀번호</p>
      <SignInput
        name="비밀번호"
        placeholder="비밀번호"
        type="password"
        register={register('password', {
          required: '비밀번호를 입력해주세요',
        })}
        errors={errors}
      />
      <p className={styles['form-label']}>비밀번호 확인</p>
      <SignInput
        name="비밀번호 확인"
        placeholder="비밀번호 확인"
        type="password"
        register={register('password_confirm', {
          required: '비밀번호를 다시 입력해주세요',
        })}
        errors={errors}
      />
      <p className={styles['form-label']}>이름</p>
      <SignInput
        name="이름"
        placeholder="이름"
        register={register('name', {
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
