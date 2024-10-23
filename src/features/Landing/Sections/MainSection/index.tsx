import classNames from 'classnames/bind';
import * as motion from 'framer-motion/client';
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
      <div className={cx('quote')}>
        <motion.p
          initial={{y: -100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 2}}
          viewport={{once: true}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est
          euismod, elementum urna eu, aliquam magna.
        </motion.p>
      </div>
      <Link href="/">AI 기업 추천 받기</Link>
    </section>
  );
};

export default MainSection;
