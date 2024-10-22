'use client';

import classNames from 'classnames/bind';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

import styles from './secondSection.module.scss';

const cx = classNames.bind(styles);

const SecondSection = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(255, 255, 255, 0)', 'rgba(189 ,177 ,245, 1)'],
  );

  return (
    <motion.section
      ref={scrollRef}
      style={{backgroundColor}}
      initial={{backgroundColor: 'rgba(255, 0, 0, 0)'}}
      className={cx('section')}
    ></motion.section>
  );
};

export default SecondSection;
