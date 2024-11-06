'use client';

import classNames from 'classnames/bind';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';

import BackgroundImage from '@/assets/images/main-bg.jpg';

import SecondSection from '../SecondSection';
import styles from './mainSection.module.scss';

const cx = classNames.bind(styles);

const MainSection = () => {
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
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
            이력서를 업로드하고
            <br />
            나에게 맞는 채용 공고를 확인하세요
          </motion.p>
          <Link href="/recommend">기업 추천 받기</Link>
        </div>
        <div className={styles['icon-wrapper']}>
          <div onClick={handleScroll}></div>
          <span onClick={handleScroll}></span>
        </div>
      </section>

      <section ref={nextSectionRef}>
        <SecondSection />
      </section>
    </>
  );
};

export default MainSection;
