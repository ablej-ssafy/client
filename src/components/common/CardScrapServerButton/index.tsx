'use client';

import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

import styles from './cardScrapServerButton.module.scss';

interface CompanyRecruitmentCardProps {
  recruitmentId: number;
  isScrap: boolean;
}

const CardScrapButton = ({
  recruitmentId,
  isScrap,
}: CompanyRecruitmentCardProps) => {
  return (
    <div>
      <input
        type="hidden"
        name={`isScrap:${recruitmentId}`}
        value={String(isScrap)}
      />
      <label htmlFor={`submit-button-${recruitmentId}`}>
        <input
          type="submit"
          name="recruitmentId"
          value={recruitmentId}
          id={`submit-button-${recruitmentId}`}
          className={styles['scrap-button']}
        />
        <div className={styles.container}>
          {isScrap ? <FaBookmark /> : <FaRegBookmark />}
        </div>
      </label>
    </div>
  );
};

export default CardScrapButton;
