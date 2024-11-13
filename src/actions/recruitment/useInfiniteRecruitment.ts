import {getCookie} from 'cookies-next';
import {useState} from 'react';

import searchService from '@/services/ableJ';
import {Search} from '@/types/ableJ';

interface UseInfinteRecruitmentProps {
  initialRecruitments: Search[];
  keyword: string | undefined;
  categoryId: number | undefined;
}

const fetchData = async (
  keyword: string | undefined,
  categoryId: number | undefined,
  page: number,
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
  const [recruitments, setRecruitments] =
    useState<Search[]>(initialRecruitments);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNextPage = async () => {
    setIsLoading(true);

    try {
      const nextPage = page + 1;
      const {content} = await fetchData(keyword, categoryId, nextPage);
      if (recruitments.length > 0) {
        setRecruitments(prev => [...prev, ...content]);
        setPage(nextPage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {recruitments, fetchNextPage, isLoading};
};

export default useInfiniteRecruitment;
