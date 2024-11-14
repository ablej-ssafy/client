import classNames from 'classnames/bind';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const VerifyPage = async ({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) => {
  if (!searchParams || !searchParams['key']) {
    return (
      <div>
        <h2>이메일 인증</h2>
        <p className={cx('message')}>이메일 인증에 실패했습니다.</p>
      </div>
    );
  }

  const response = await ableJ.verifyEmail(searchParams['key'] as string);

  if (!response.success) {
    return (
      <div className={cx('verification')}>
        <h2 className={cx('title')}>이메일 인증</h2>
        <p className={cx('message')}>{response.message}</p>
      </div>
    );
  }

  redirect('/');
};

export default VerifyPage;
