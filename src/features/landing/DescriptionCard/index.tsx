import classNames from 'classnames/bind';
import * as motion from 'framer-motion/client';
import Image from 'next/image';

import CandidateImage from '@/assets/images/add-candidate.png';

import styles from './descriptionCard.module.scss';

const cx = classNames.bind(styles);

const DescriptionCard = () => {
  return (
    <motion.article className={cx('card')}>
      <p className={cx('description')}>이력서 기반 기업 추천 서비스</p>
      <h1 className={cx('title')}>AI HeadHunting</h1>
      <p className={cx('paragraph')}>
        AI HeadHunting은 구직자가 사전에 작성해둔
        <br />
        이력서를 기반으로 채용기업을 추천해주는 서비스 입니다.
      </p>
      <p className={cx('paragraph')}>
        구직자가 이력서를 업로드 하면
        <br />
        AI가 구직자의 조건에 맞는 기업들을 선별,
        <br />
        추천해드리는 솔루션입니다.
      </p>
      <p className={cx('paragraph')}>
        더이상 채용서비스에 들어가서
        <br />
        채용공고를 확인할 필요가 없습니다.
      </p>
      <p className={cx('paragraph')}>
        업로드 한번이면,
        <br />
        구직자께서 원하는 채용공고를
        <br />
        큐레이팅 해드립니다.
      </p>
      <motion.div
        className={cx('image-container')}
        initial={{rotate: 340, scale: 0.01}}
        whileInView={{rotate: 0, scale: 1}}
        viewport={{margin: '-150px', once: true}}
      >
        <Image src={CandidateImage} alt={'candidate image'} />
      </motion.div>
    </motion.article>
  );
};

export default DescriptionCard;
