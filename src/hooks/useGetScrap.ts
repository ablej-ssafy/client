import {getCookie} from 'cookies-next';
import {useCallback, useEffect, useState} from 'react';

import {ScrapResponse} from '@/types/ableJ';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getScrapStatus = async (recruitmentId: number) => {
  const accessToken = getCookie('accessToken');

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

const useGetScrap = (recruitmentId: number) => {
  const [isScrap, setIsScrap] = useState<boolean>(false);

  const fetch = useCallback(async () => {
    const scrap = await getScrapStatus(recruitmentId);
    setIsScrap(scrap);
  }, [recruitmentId]);

  useEffect(() => {
    (async () => {
      await fetch();
    })();
  }, [recruitmentId, fetch]);

  return {isScrap, refetch: fetch};
};

export default useGetScrap;
