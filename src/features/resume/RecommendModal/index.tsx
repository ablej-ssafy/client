'use client';

import {RecruitmentCard} from '@/types/ableJ';

import styles from './recommendModal.module.scss';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: RecruitmentCard[];
}

const RecommendModal = ({isOpen, onClose, cards}: PreviewModalProps) => {
  if (!isOpen) return null;

  console.log(cards);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {/* {cards.map(())} */}
      </div>
    </div>
  );
};

export default RecommendModal;
