import {getCookie, setCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {useOptimistic, useState} from 'react';

import deleteScrapAction from '@/actions/recruitment/deleteScrapAction';
import scrapAction from '@/actions/recruitment/scrapAction';

interface ScrapActionProps {
  recruitmentId: number;
  isScrap: boolean;
}

interface ScrapListProps {
  scrapped: number[];
  redirectUrl?: string;
}

const useScrapList = ({scrapped, redirectUrl}: ScrapListProps) => {
  const router = useRouter();
  const [scrapList, setScrapList] = useState<number[]>(scrapped);
  const [scraps, addScrap] = useOptimistic(
    scrapList,
    (state, newState: ScrapActionProps) => {
      if (newState.isScrap) {
        return [...state, newState.recruitmentId];
      } else {
        return state.filter(id => id !== newState.recruitmentId);
      }
    },
  );

  const scrap = async ({recruitmentId, isScrap}: ScrapActionProps) => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
      setCookie(
        process.env.NEXT_PUBLIC_AUTH_REDIRECT_KEY || '',
        redirectUrl || '/',
      );
      router.push('/signin');
      return;
    }

    const newScrap = !isScrap;
    addScrap({recruitmentId, isScrap: newScrap});

    try {
      const {success} = isScrap
        ? await deleteScrapAction(recruitmentId)
        : await scrapAction(recruitmentId);
      if (!success) {
        throw Error('에러 발생');
      }

      setScrapList(prev => {
        if (newScrap) {
          return [...prev, recruitmentId];
        } else {
          return prev.filter(id => id !== recruitmentId);
        }
      });
    } catch (error) {
      console.error('Scrap failed:', error);
    }
  };

  return {scraps, scrap};
};

export default useScrapList;
