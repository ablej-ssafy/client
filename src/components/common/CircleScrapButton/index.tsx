import {getCookie} from 'cookies-next';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import {ScrapResponse} from '@/types/ableJ';

import styles from './circleScrapButton.module.scss';

interface CircleScrapButtonProps {
  recruitmentId: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const accessToken = getCookie('accessToken');

const getScrapStatus = async (recruitmentId: number) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/recruitments/${recruitmentId}/scrap`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: [`recruitment-${recruitmentId}-scrap`],
      },
    },
  );

  const {data}: ScrapResponse = await response.json();

  return data;
};

const CircleScrapButton = async ({recruitmentId}: CircleScrapButtonProps) => {
  const isScrap = await getScrapStatus(recruitmentId);

  // const handleScrap = async () => {
  //   await (isScrap
  //     ? DeleteScrapAction(recruitmentId)
  //     : ScrapAction(recruitmentId));
  // };

  return (
    <div className={styles.circle}>
      {isScrap ? <MdBookmark size={25} /> : <MdBookmarkBorder size={25} />}
    </div>
  );
};

export default CircleScrapButton;
