'use client';

import classNames from 'classnames/bind';
// import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {RiKakaoTalkFill} from 'react-icons/ri';
import {RxCross2} from 'react-icons/rx';

import SignInput from '@/components/signin/SignInput';
import SocialIcon from '@/components/signin/SocialIcon';

import styles from './SigninModal.module.scss';

const cx = classNames.bind(styles);

interface SigninModalProps {
  setSignInOpen: (value: boolean) => void;
}

const SigninModal = ({setSignInOpen}: SigninModalProps) => {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <RxCross2
          className={styles.close}
          size={20}
          onClick={() => setSignInOpen(false)}
        />
        <p className={styles['text-header']}>시작하기</p>
        <p className={styles['text-content']}>
          지금 로그인하고 AI로 채용공고를 추천받아보세요.
        </p>
        <form className={styles['signin-form']}>
          <SignInput placeholder="이메일" />
          <SignInput placeholder="비밀번호" type="password" />
          <button className={cx('button', 'sign-in')}>로그인</button>
        </form>
        <button className={cx('button', 'sign-up')}>회원가입</button>

        <div className={styles['line']}>
          <div className={styles['border-line']} />
          <p>OR</p>
          <div className={styles['border-line']} />
        </div>

        <div className={styles.social}>
          <SocialIcon>
            <FcGoogle size={25} />
          </SocialIcon>
          <SocialIcon>
            <RiKakaoTalkFill size={25} color="#191919" />
          </SocialIcon>
          {/* <SocialIcon>
            <AiFillGithub size={25} />
          </SocialIcon> */}
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
