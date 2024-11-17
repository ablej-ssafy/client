import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

import styles from './cardScrapButton.module.scss';

interface CompanyRecruitmentCardProps {
  scrap?: () => void;
  isScrap: boolean;
}

const CardScrapButton = ({scrap, isScrap}: CompanyRecruitmentCardProps) => {
  return (
    <button onClick={scrap} className={styles.button}>
      {isScrap ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export default CardScrapButton;
