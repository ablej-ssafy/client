import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import BackgroundImage from '@/assets/images/main-bg.jpg';

import styles from './mainSection.module.scss';

const cx = classNames.bind(styles);

const MainSection = () => {
  return (
    <section className={cx('section', 'main')}>
      <Image
        alt="백그라운드 이미지"
        src={BackgroundImage}
        objectPosition="center"
        objectFit="cover"
        fill={true}
        className={cx('main-bg')}
      />
      <p className={cx('quote')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est
        euismod, elementum urna eu, aliquam magna.
      </p>
      <Link href="/">AI 기업 추천 받기</Link>
    </section>
  );
};

export default MainSection;
