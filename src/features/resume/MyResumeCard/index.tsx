'use client';

import {BsTrash3} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';

import resumeDeleteAction from '@/actions/resume/resumeDeleteAction';
import {revalidateResumePage} from '@/actions/resume/revalidatePathAction';

import styles from './myResumeCard.module.scss';

interface ResumeCardProps {
  id: number;
  title: string;
  date: string;
  type?: string;
}

const MyResumeCard = ({id, title, date, type}: ResumeCardProps) => {
  const handleDelete = async () => {
    const response = await resumeDeleteAction(id);
    if (response.success) {
      await revalidateResumePage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {type ? (
          <div className={styles.self}>{type}</div>
        ) : (
          <div className={styles.default}>기본 이력서</div>
        )}
        <div onClick={handleDelete}>
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
  );
};

export default MyResumeCard;
