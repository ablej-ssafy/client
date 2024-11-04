import {BsTrash3} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';

import styles from './myResumeCard.module.scss';

interface ResumeCardProps {
  title: string;
  date: string;
  type?: string;
}

const MyResumeCard = ({title, date, type}: ResumeCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {type ? (
          <div className={styles.self}>{type}</div>
        ) : (
          <div className={styles.default}>기본 이력서</div>
        )}
        <div>
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
