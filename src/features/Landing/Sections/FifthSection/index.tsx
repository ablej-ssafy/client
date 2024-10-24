import classNames from 'classnames/bind';
import Image from 'next/image';

import BackgroundImage from '@/assets/images/main-sub-bg.jpg';
import GlassCard from '@/features/Landing/GlassCard';

import styles from './fifthSection.module.scss';

const cx = classNames.bind(styles);

const FifthSection = () => {
  return (
    <section className={cx('section')}>
      <Image
        src={BackgroundImage}
        alt="백그라운드 이미지"
        className={cx('background')}
        fill
      />
      <GlassCard />
      <div className={cx('filter')} />
    </section>
  );
};

export default FifthSection;
