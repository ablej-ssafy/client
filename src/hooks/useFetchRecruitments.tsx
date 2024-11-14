import {getCookie} from 'cookies-next';
import {useCallback, useEffect, useState} from 'react';

import recruitmentService from '@/services/ableJ';
import {useRootStore} from '@/zustand/rootStore';

interface UseFetchRecruitmentsProps {
  resumeId?: string;
}

const useFetchRecruitments = ({resumeId}: UseFetchRecruitmentsProps) => {
  const accessToken = getCookie('accessToken');
  const {recruitments, setRecruitments} = useRootStore();
  const currentRecruitments = recruitments[Number(resumeId)];
  const [loading, setLoading] = useState(false);

  const fetchRecruitments = useCallback(async () => {
    if (currentRecruitments || !resumeId || !accessToken) return;

    setLoading(true);

    try {
      const {data} = await recruitmentService.getRecommendedRecruitments(
        Number(resumeId),
        accessToken,
      );
      setRecruitments(Number(resumeId), data);
    } catch (error) {
      console.error('추천 공고 가져오는 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  }, [resumeId, accessToken, currentRecruitments, setRecruitments]);

  useEffect(() => {
    fetchRecruitments();
  }, [fetchRecruitments]);

  return {recruitments: currentRecruitments, loading};
};

export default useFetchRecruitments;
