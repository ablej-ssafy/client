'use client';

import {useState} from 'react';
import {RxCross2} from 'react-icons/rx';

import CareerInput from '@/components/signin/CareerInput';
import InfoInput from '@/components/signin/InfoInput';
import SigninInput from '@/components/signin/SigninInput';

import styles from './signModal.module.scss';

interface SignModalProps {
  setSignInOpen: (value: boolean) => void;
}

export enum SignSTEP {
  SIGNIN,
  USERINFO,
  CAREER,
}

const SignModal = ({setSignInOpen}: SignModalProps) => {
  const [step, setStep] = useState<SignSTEP>(SignSTEP.SIGNIN);
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <RxCross2
          className={styles.close}
          size={20}
          onClick={() => setSignInOpen(false)}
        />
        {step === SignSTEP.SIGNIN && <SigninInput setStep={setStep} />}
        {step === SignSTEP.USERINFO && (
          <>
            <p className={styles['text-header']}>이제 곧 시작</p>
            <p className={styles['text-content']}>얼마 안남았어요...!</p>
            <p className={styles['text-content']}>
              회원가입을 하시면 AI 큐레이팅을 사용할 수 있습니다.
            </p>
            <InfoInput setStep={setStep} />
          </>
        )}
        {step === SignSTEP.CAREER && (
          <>
            <p className={styles['text-header']}>마지막 한 단계</p>
            <p className={styles['text-content']}>
              회원님의 경력과 관심 직무를 선택해주세요.
            </p>
            <CareerInput />
          </>
        )}
      </div>
    </div>
  );
};

export default SignModal;
