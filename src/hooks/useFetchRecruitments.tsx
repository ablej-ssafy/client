import {getCookie} from 'cookies-next';
import {useCallback, useEffect, useState} from 'react';

import recruitmentService from '@/services/ableJ';
import {useRecommendStore} from '@/zustand/slices/recommendSlice';

interface UseFetchRecruitmentsProps {
  resumeId: string | undefined;
}

const useFetchRecruitments = ({resumeId}: UseFetchRecruitmentsProps) => {
  const accessToken = getCookie('accessToken');
  const {recruitments, setRecruitments, isHydrated} = useRecommendStore();
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
    if (!isHydrated || typeof window === 'undefined') return;

    fetchRecruitments();
  }, [isHydrated, fetchRecruitments]);

  return {recruitments: currentRecruitments, loading};
};

export default useFetchRecruitments;
