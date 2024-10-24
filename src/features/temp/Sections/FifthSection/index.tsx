import classNames from 'classnames/bind';
import Image from 'next/image';

import BackgroundImage from '@/assets/images/main-sub-bg.jpg';
import GlassCard from '@/features/temp/GlassCard';
import ReviewCarousel from '@/features/temp/ReviewCarousel';

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
      <div className={cx('filter')} />
      <GlassCard />
      <div className={cx('title')}>
        <p>실제 추기로 보는 AI HeadHunting</p>
        <h2>
          AI HeadHunting을 사용해 구직과
          <br />
          체용에 성공 경험담을 확인하세요
        </h2>
      </div>
      <ReviewCarousel />
    </section>
  );
};

export default FifthSection;
