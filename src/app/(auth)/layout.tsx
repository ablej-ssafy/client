import classNames from 'classnames/bind';
import Image from 'next/image';
import {ReactNode} from 'react';

import HiringImage from '@/assets/images/hiring.jpg';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className={cx('page')}>
      <Image
        src={HiringImage}
        alt={'구인 공고 이미지'}
        className={cx('image')}
      />
      <div className={cx('form-container')}>{children}</div>
    </div>
  );
};

export default AuthLayout;
