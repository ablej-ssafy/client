'use client';

import classNames from 'classnames/bind';
import type {Variants} from 'framer-motion';
import * as motion from 'framer-motion/client';

import CandidateImage from '@/assets/images/add-candidate.png';
import JobOfferImage from '@/assets/images/contract-job-offer.png';
import JobFolder from '@/assets/images/job-folder.png';

import IconCard from '../../IconCard';
import styles from './fourthSection.module.scss';

const cx = classNames.bind(styles);

const variants: Variants = {
  hidden: {opacity: 0, y: -100},
  visible: {opacity: 1, y: 0, transition: {duration: 1}},
};

const FourthSection = () => {
  return (
    <section className={cx('section')}>
      <motion.div
        className={cx('section-header')}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        <motion.p whileInView="visible">AI 채용공고 큐레이팅</motion.p>
        <motion.h1 whileInView="visible">
          AI HeadHunting을 소개합니다.
        </motion.h1>
      </motion.div>
      <motion.div
        className={cx('lottie-list')}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, margin: '-500px'}}
      >
        <IconCard
          title={'Drag And Drop'}
          description={
            <>
              <span>더이상 채용공고를 찾기 마세요</span>
              <span>AI HeadHunting이 구직자의 이력서에 기반해서</span>
              <span>채용공고를 추천해드립니다.</span>
            </>
          }
          imageOption={{
            src: JobFolder,
            alt: '채용공고 이미지',
          }}
        />
        <IconCard
          title={'자소서 작성'}
          description={
            <>
              <span>기존에 작성한 이력서가 없다구요?</span>
              <span>AI HeadHunting은 구직자가 편안하게 </span>
              <span>이력서를 작성할 수 있도록 템플릿을 제공합니다.</span>
            </>
          }
          imageOption={{
            src: JobOfferImage,
            alt: '이력서 이미지',
          }}
        />
        <IconCard
          title={'인재 검색'}
          description={
            <>
              <span>기업에 필요한 인재를 찾고 있나요?</span>
              <span>AI HeadHunting은 채용공고를 업로드하면</span>
              <span>적합한 인재를 찾아줍니다.</span>
            </>
          }
          imageOption={{
            src: CandidateImage,
            alt: '인재 검색 이미지',
          }}
        />
      </motion.div>
    </section>
  );
};

export default FourthSection;
