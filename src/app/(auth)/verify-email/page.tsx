import classNames from 'classnames/bind';
import Link from 'next/link';

import EmailVerificationGuide from '@/features/auth/EmailVerificationGuide';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const VerifyPage = () => {
  return (
    <div className={cx('guide-section')}>
      <EmailVerificationGuide />
      <Link href="/">메인화면으로 돌아가기</Link>
    </div>
  );
};

export default VerifyPage;
