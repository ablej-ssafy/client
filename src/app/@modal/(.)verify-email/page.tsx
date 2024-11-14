'use client';
import classNames from 'classnames/bind';
import {useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import resendEmailAction from '@/actions/resendEmailAction';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const INITIAL_STATE = {
  success: false,
  error: '',
};

const VerifyModal = () => {
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
      <p className={cx('email-content')}>이메일이 도착하지 않았나요?</p>
      <p className={cx('email-content')}>스팸폴더를 확인해보세요.</p>
      <button className={cx('email-button')}>인증코드 재전송</button>
    </form>
  );
};

export default VerifyModal;
