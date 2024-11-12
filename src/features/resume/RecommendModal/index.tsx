'use client';

import Link from 'next/link';
import {MdClose, MdOutlineArrowForwardIos} from 'react-icons/md';

import RecruitmentCard from '@/components/common/RecruitmentCard';
import {RecruitmentCardType} from '@/types/ableJ';

import styles from './recommendModal.module.scss';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: RecruitmentCardType[];
}

const RecommendModal = ({isOpen, onClose, cards}: PreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles['close-button']} onClick={onClose}>
          <MdClose size="24" />
        </button>
        <h3>맞춤 공고를 추천해드려요</h3>
        <Link href={`/recommend`} className={styles.more}>
          더보기
          <MdOutlineArrowForwardIos size={14} />
        </Link>
        <div className={styles['card-container']}>
          {cards.map(item => (
            <RecruitmentCard key={item.id} item={item} scrap={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendModal;
