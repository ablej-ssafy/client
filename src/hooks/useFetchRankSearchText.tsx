import {getCookie} from 'cookies-next';
import {useCallback, useEffect, useState} from 'react';

import ableJ from '@/services/ableJ';
import {RankSearch} from '@/types/ableJ';

const useFetchRankSearchText = () => {
  const accessToken = getCookie('accessToken');

  const [ranks, setRanks] = useState<RankSearch>({
    ranks: [],
    recentKeywords: [],
  });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRanks = useCallback(async () => {
    if (!accessToken) return;

    setLoading(true);

    try {
      const {data} = await ableJ.getRankSearch(accessToken);
      setRanks(data);
    } catch (error) {
      console.error('최근 검색어, 인기 검색어 가져오는 중 오류', error);
    } finally {
      setLoading(false);
    }
  }, [accessToken, setRanks]);

  useEffect(() => {
    fetchRanks();
  }, [fetchRanks]);

  return {ranks, loading};
};

export default useFetchRankSearchText;
