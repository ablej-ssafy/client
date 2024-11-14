import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import {redirect} from 'next/navigation';

import ErrorImage from '@/assets/images/error.png';
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
      <div className={cx('verification')}>
        <h2 className={cx('title')}>에러 발생</h2>
        <Image
          src={ErrorImage}
          alt="에러 이미지"
          className={cx('error-image')}
        />
        <p className={cx('message')}>이메일 인증에 실패했습니다.</p>
        <Link href="/">메인화면으로 가기</Link>
      </div>
    );
  }

  const response = await ableJ.verifyEmail(searchParams['key'] as string);

  if (!response.success) {
    return (
      <div className={cx('verification')}>
        <h2 className={cx('title')}>에러 발생</h2>
        <Image
          src={ErrorImage}
          alt="에러 이미지"
          className={cx('error-image')}
        />
        <p className={cx('message')}>{response.message}</p>
        <Link href="/">메인화면으로 가기</Link>
      </div>
    );
  }

  redirect('/');
};

export default VerifyPage;
