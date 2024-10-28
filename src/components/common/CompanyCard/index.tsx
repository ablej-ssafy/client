import Image from 'next/image';
import {FaRegBookmark} from 'react-icons/fa6';

import styles from './companyCard.module.scss';

const CompanyCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/"
        alt="sample_img"
        width={50}
        height={50}
        className={styles.img}
      />
      <FaRegBookmark />
      <div className={styles['job-title']}>Meta Designer 백엔드 개발자</div>
      <div className={styles['company-name']}>메디인테크</div>
    </div>
  );
};

export default CompanyCard;
