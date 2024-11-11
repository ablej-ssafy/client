import {getCookie} from 'cookies-next';
import {useEffect} from 'react';

import recruitmentService from '@/services/ableJ';
import {useRecommendStore} from '@/zustand/slices/recommendSlice';

interface UseFetchRecruitmentsProps {
  resumeId: string | undefined;
}

const useFetchRecruitments = ({resumeId}: UseFetchRecruitmentsProps) => {
  const accessToken = getCookie('accessToken');
  const {recruitments, setRecruitments} = useRecommendStore();
  const currentRecruitments = recruitments[Number(resumeId)];

  useEffect(() => {
    const fetchRecruitments = async () => {
      if (currentRecruitments || !resumeId || !accessToken) return;

      try {
        const {data} = await recruitmentService.getRecommendedRecruitments(
          Number(resumeId),
          accessToken,
        );
        console.log('AI 호출');
        setRecruitments(Number(resumeId), data);
      } catch (error) {
        console.error('추천 공고 가져오는 중 오류 발생:', error);
      }
    };

    fetchRecruitments();
  }, [resumeId, accessToken, currentRecruitments, setRecruitments]);

  return currentRecruitments;
};

export default useFetchRecruitments;
