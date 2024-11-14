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
      <label
        htmlFor={`submit-button-${recruitmentId}`}
        className={styles.container}
      >
        <input
          type="submit"
          name="recruitmentId"
          value={recruitmentId}
          id={`submit-button-${recruitmentId}`}
          className={styles['scrap-button']}
        />
        {isScrap ? <FaBookmark /> : <FaRegBookmark />}
      </label>
    </div>
  );
};

export default CardScrapButton;
