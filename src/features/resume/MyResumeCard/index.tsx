import {BsTrash3} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';

import styles from './myResumeCard.module.scss';

const MyResumeCard = () => {
  const data = {
    type: '기본 이력서',
    title: '파일명 제목 1',
    date: '2024.10.10',
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>{data.type}</div>
        <div>
          <BsTrash3 size={20} />
        </div>
      </div>
      <div className={styles.center}>
        <div>{data.title}</div>
        <div>{data.date}</div>
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
