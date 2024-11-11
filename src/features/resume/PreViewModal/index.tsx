'use client';

import styles from './preViewModal.module.scss';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PreviewModal = ({isOpen, onClose, pdfUrl}: PreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <iframe src={`${pdfUrl}#toolbar=0`} />
      </div>
    </div>
  );
};

export default PreviewModal;
