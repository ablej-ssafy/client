'use client';

import Link from 'next/link';
import {MdClose, MdOutlineArrowForwardIos} from 'react-icons/md';

import CompanyCard from '@/components/common/CompanyCard';
import {RecruitmentCard} from '@/types/ableJ';

import styles from './recommendModal.module.scss';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: RecruitmentCard[];
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
            <CompanyCard key={item.recruitmentId} item={item} scrap={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendModal;
