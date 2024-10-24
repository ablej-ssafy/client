import classNames from 'classnames/bind';
import type {Variants} from 'framer-motion';
import * as motion from 'framer-motion/client';

import styles from './glassCard.module.scss';

const cx = classNames.bind(styles);

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {duration: 1},
  },
};

const GlassCard = () => {
  return (
    <div className={cx('container')}>
      <motion.div
        className={cx('glass-card')}
        variants={variants}
        initial="hidden"
        whileInView="animate"
        viewport={{once: true, margin: '-394px'}}
      >
        <motion.div className={cx('card-section')} variants={variants}>
          <motion.p variants={variants}>
            지금까지&nbsp;
            <motion.span className={cx('strong')} variants={variants}>
              AI HeadHunting
            </motion.span>
            을 사용해 취업한&nbsp;
            <motion.span variants={variants}>구직자 수</motion.span>
          </motion.p>
        </motion.div>
        <motion.div className={cx('card-section')} variants={variants}>
          <motion.p variants={variants}>
            <motion.span className={cx('number')} variants={variants}>
              10000
            </motion.span>
            +
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GlassCard;
