import classNames from 'classnames/bind';
import type {Variants} from 'framer-motion';
import * as motion from 'framer-motion/client';
import Image, {ImageProps} from 'next/image';
import {ReactNode} from 'react';

import styles from './iconCard.module.scss';

interface LottieCardProps {
  title: string;
  description: string | ReactNode;
  imageOption: ImageProps;
}

const cx = classNames.bind(styles);

const variants: Variants = {
  hidden: {opacity: 0, y: -100},
  visible: {opacity: 1, y: 0, transition: {duration: 1}},
};

const IconCard = ({imageOption, description, title}: LottieCardProps) => {
  return (
    <motion.div
      className={cx('card')}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: '-200px'}}
    >
      <Image {...imageOption} alt={'3D 이미지'} className={cx('image')} />
      <motion.div variants={variants}>
        <motion.h2 variants={variants}>{title}</motion.h2>
        <motion.p variants={variants} className={cx('paragraph')}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default IconCard;
