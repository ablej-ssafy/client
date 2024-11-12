import {getCookie} from 'cookies-next';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import recruitmentService from '@/services/ableJ';

import styles from './scrapButton.module.scss';

interface ScrapButtonProps {
  recruitmentId: number;
}

const ScrapButton = async ({recruitmentId}: ScrapButtonProps) => {
  const accessToken = getCookie('accessToken');

  const {data: isScrap} = await recruitmentService.getScrapStatus(
    recruitmentId,
    accessToken,
  );

  return (
    <div className={styles.container}>
      <span className={styles.scrap}>스크랩</span>
      {isScrap ? (
        <MdBookmark size={25} color="white" />
      ) : (
        <MdBookmarkBorder size={25} color="white" />
      )}
    </div>
  );
};

export default ScrapButton;
