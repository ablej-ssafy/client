import {getCookie} from 'cookies-next';
import {useOptimistic, useState} from 'react';

import deleteScrapAction from '@/actions/recruitment/deleteScrapAction';
import scrapAction from '@/actions/recruitment/scrapAction';
import ableJ from '@/services/ableJ';
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
    const {data} = await ableJ.recruitmentSearch({
      keyword,
      page,
      accessToken,
    });
    return data;
  }

  if (categoryId) {
    const {data} = await ableJ.getCategoryRecruitment({
      categoryId: +categoryId,
      page,
      accessToken,
    });
    return data;
  }

  const {data} = await ableJ.getAllRecruitment({accessToken, page});
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

  const fetchNextPage = async () => {
    setIsLoading(true);

    try {
      if (!enable) return;
      const nextPage = page + 1;
      const {
        content,
        page: {totalPages},
      } = await fetchData(nextPage, keyword, categoryId);
      setEnable(totalPages > nextPage);

      if (fetchRecruitments.length > 0) {
        setFetchRecruitments(prev => [...prev, ...content]);
        setPage(nextPage);
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
