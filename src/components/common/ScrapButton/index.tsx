import {cookies} from 'next/headers';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import recruitmentScrapAction from '@/actions/scrap/recruitmentScrapAction';
import {ScrapResponse} from '@/types/ableJ';

import styles from './scrapButton.module.scss';

interface ScrapButtonProps {
  recruitmentId: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getScrapStatus = async (recruitmentId: number): Promise<boolean> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
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

const ScrapButton = async ({recruitmentId}: ScrapButtonProps) => {
  const isScrap = await getScrapStatus(recruitmentId);

  return (
    <form className={styles.container} action={recruitmentScrapAction}>
      <input name="recruitmentId" type="hidden" value={String(recruitmentId)} />
      <input
        name="tag"
        type="hidden"
        value={`recruitment-${recruitmentId}-scrap`}
      />
      <input
        name={`isScrap:${recruitmentId}`}
        type="hidden"
        value={String(isScrap)}
      />
      <label htmlFor="submit-button" className={styles['submit-button']}>
        <input
          type="submit"
          id="submit-button"
          className={styles['scrap-button']}
        />
        <span className={styles.scrap}>스크랩</span>
        {isScrap ? (
          <MdBookmark size={25} color="white" />
        ) : (
          <MdBookmarkBorder size={25} color="white" />
        )}
      </label>
    </form>
  );
};

export default ScrapButton;
