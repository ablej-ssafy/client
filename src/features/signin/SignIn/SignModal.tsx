'use client';

import {useState} from 'react';

import SigninInput from '@/features/signin/SignIn/SigninInput';
import CareerInput from '@/features/signin/SignUp/CareerInput';
import InfoInput from '@/features/signin/SignUp/InfoInput';

import styles from './signModal.module.scss';

export enum SIGN_STEP {
  SIGNIN,
  USERINFO,
  CAREER,
}

const SignModal = () => {
  const [step, setStep] = useState<SIGN_STEP>(SIGN_STEP.SIGNIN);

  return (
    <div className={styles['sign-modal']}>
      {step === SIGN_STEP.SIGNIN && <SigninInput setStep={setStep} />}

      {step === SIGN_STEP.USERINFO && (
        <>
          <p className={styles['text-header']}>이제 곧 시작</p>
          <p className={styles['text-content']}>얼마 안남았어요...!</p>
          <p className={styles['text-content']}>
            회원가입을 하시면 AI 큐레이팅을 사용할 수 있습니다.
          </p>
          <InfoInput setStep={setStep} />
        </>
      )}

      {step === SIGN_STEP.CAREER && (
        <>
          <p className={styles['text-header']}>마지막 한 단계</p>
          <p className={styles['text-content']}>
            회원님의 경력과 관심 직무를 선택해주세요.
          </p>
          <CareerInput />
        </>
      )}
    </div>
  );
};

export default SignModal;
