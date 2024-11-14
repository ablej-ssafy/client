'use client';
import classNames from 'classnames/bind';
import Image from 'next/image';
import {useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import resendEmailAction from '@/actions/resendEmailAction';
import LockImage from '@/assets/images/verified-padlock.png';

import styles from './emailVerificationGuide.module.scss';

const cx = classNames.bind(styles);

const INITIAL_STATE = {
  success: false,
  error: '',
};

const EmailVerificationGuide = () => {
  const [state, action] = useFormState(resendEmailAction, INITIAL_STATE);

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  useEffect(() => {
    if (!state.success) return;
    toast.success('인증코드가 재전송 되었습니다.');
  }, [state]);

  return (
    <form className={cx('email')} action={action}>
      <h3 className={cx('email-title')}>이메일 인증이 필요합니다</h3>
      <Image src={LockImage} alt="자물쇠 이미지" className={cx('image')} />
      <div className={cx('email-content')}>
        <p className={cx('email-text')}>이메일이 도착하지 않았나요?</p>
        <p className={cx('email-text')}>스팸폴더를 확인해보세요.</p>
      </div>
      <button className={cx('email-button')}>인증코드 재전송</button>
    </form>
  );
};

export default EmailVerificationGuide;
