'use client';

import classNames from 'classnames/bind';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import {useRef, useState} from 'react';

import CompanyCarousel from '@/features/temp/CompanyCarousel';

import styles from './secondSection.module.scss';

const cx = classNames.bind(styles);

const SecondSection = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  const [card, setCard] = useState(0);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(255, 255, 255, 0)', 'rgba(189 ,177 ,245, 1)'],
  );

  const selectCard = useTransform(scrollYProgress, [0, 1], [0, 8]);
  useMotionValueEvent(selectCard, 'change', value => {
    setCard(Math.round(value));
  });

  return (
    <motion.section
      ref={scrollRef}
      style={{backgroundColor}}
      initial={{backgroundColor: 'rgba(255, 0, 0, 0)'}}
      className={cx('section')}
    >
      <motion.p
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 2}}
        viewport={{once: true, margin: '-500px'}}
      >
        수많은 기업중 적합학 기업이 <br />
        어디인지 궁금하지 않나요?
      </motion.p>
      <CompanyCarousel activeCard={card} />
    </motion.section>
  );
};

export default SecondSection;
