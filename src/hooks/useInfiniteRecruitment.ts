import {getCookie} from 'cookies-next';
import {useEffect, useOptimistic, useState} from 'react';

import deleteScrapAction from '@/actions/recruitment/deleteScrapAction';
import scrapAction from '@/actions/recruitment/scrapAction';
import searchService from '@/services/ableJ';
import {Search} from '@/types/ableJ';

interface UseInfinteRecruitmentProps {
  initialRecruitments: Search[];
  keyword?: string;
  categoryId?: number;
}

interface ScrapActionProps {
  recruitmentId: number;
  isScrap: boolean;
}

const fetchData = async (
  page: number,
  keyword?: string,
  categoryId?: number,
) => {
  const accessToken = getCookie('accessToken');

  if (keyword) {
    const {data} = await searchService.recruitmentSearch({
      keyword,
      page,
      accessToken,
    });
    return data;
  }

  if (categoryId) {
    const {data} = await searchService.getCategoryRecruitment({
      categoryId: +categoryId,
      page,
      accessToken,
    });
    return data;
  }

  const {data} = await searchService.getAllRecruitment({accessToken, page});
  return data;
};

const useInfiniteRecruitment = ({
  initialRecruitments,
  keyword,
  categoryId,
}: UseInfinteRecruitmentProps) => {
  const [fetchRecruitments, setFetchRecruitments] =
    useState<Search[]>(initialRecruitments);
  const [recruitments, addRecruitments] = useOptimistic(
    fetchRecruitments,
    (state, newState: ScrapActionProps) => {
      return state.map(recruitment =>
        recruitment.recruitmentId === newState.recruitmentId
          ? {...recruitment, scrapped: newState.isScrap}
          : recruitment,
      );
    },
  );
  const [page, setPage] = useState(0);
  const [enable, setEnable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFetchRecruitments(initialRecruitments);
    setEnable(true);
  }, [initialRecruitments]);

  const fetchNextPage = async () => {
    setIsLoading(true);

    try {
      if (!enable) return;
      const nextPage = page + 1;
      const {
        content,
        page: {totalPages},
      } = await fetchData(nextPage, keyword, categoryId);

      if (fetchRecruitments.length > 0) {
        setFetchRecruitments(prev => [...prev, ...content]);
        setPage(nextPage);
        setEnable(totalPages > nextPage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const scrap = async ({recruitmentId, isScrap}: ScrapActionProps) => {
    const newScrap = !isScrap;
    addRecruitments({recruitmentId, isScrap: newScrap});

    try {
      const {success} = isScrap
        ? await deleteScrapAction(recruitmentId)
        : await scrapAction(recruitmentId);
      if (!success) {
        throw Error('에러 발생');
      }

      setFetchRecruitments(prev =>
        prev.map(recruitment =>
          recruitment.recruitmentId === recruitmentId
            ? {...recruitment, scrapped: newScrap}
            : recruitment,
        ),
      );
    } catch (error) {
      console.error('Scrap failed:', error);
    }
  };

  return {recruitments, scrap, fetchNextPage, isLoading};
};

export default useInfiniteRecruitment;
