'use client';

import {useState} from 'react';
import {BsTrash3} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';

import resumeDeleteAction from '@/actions/resume/resumeDeleteAction';
import {revalidateResumePage} from '@/actions/resume/revalidatePathAction';

import PreviewModal from './../PreViewModal';
import styles from './myResumeCard.module.scss';

interface ResumeCardProps {
  id: number;
  url: string;
  title: string;
  date: string;
  type?: string;
}

const MyResumeCard = ({id, url, title, date, type}: ResumeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    const response = await resumeDeleteAction(id);
    if (response.success) {
      await revalidateResumePage();
    }
  };

  const handleOpenPDF = () => {
    setIsOpen(true);
  };

  const handleClosePDF = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.container} onClick={handleOpenPDF}>
        <div className={styles.top}>
          {type ? (
            <div className={styles.self}>{type}</div>
          ) : (
            <div className={styles.default}>기본 이력서</div>
          )}
          <div
            onClick={e => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <BsTrash3 size={20} />
          </div>
        </div>
        <div className={styles.center}>
          <div>{title}</div>
          <div>{date.replaceAll('-', '.')}</div>
        </div>
        <div className={styles.link}>
          <span>
            추천 기업
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <PreviewModal isOpen={isOpen} onClose={handleClosePDF} pdfUrl={url} />
    </>
  );
};

export default MyResumeCard;
