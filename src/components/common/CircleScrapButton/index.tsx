import {cookies} from 'next/headers';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import recruitmentService from '@/services/ableJ';

import styles from './circleScrapButton.module.scss';

interface CircleScrapButtonProps {
  recruitmentId: number;
}

const CircleScrapButton = async ({recruitmentId}: CircleScrapButtonProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const {data: isScrap} = await recruitmentService.getScrapStatus(
    recruitmentId,
    accessToken,
  );

  // const {data: isScrap} = await fetch(
  //   `http://noteme.kro.kr:3000/api/v1/recruitments/${recruitmentId}/scrap`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   },
  // );

  return (
    <div className={styles.circle}>
      {isScrap ? <MdBookmark size={25} /> : <MdBookmarkBorder size={25} />}
    </div>
  );
};

export default CircleScrapButton;
