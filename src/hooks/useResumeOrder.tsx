import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import toast from 'react-hot-toast';

import ableJ from '@/services/ableJ';
import {ResumeOrder} from '@/types/ableJ';

const INITIAL_RESUME_ORDER: ResumeOrder = {
  basic: 0,
  education: 1,
  company: 2,
  project: 3,
  activity: 4,
  qualification: 5,
  language: 6,
  tech: 7,
};

const useResumeOrder = () => {
  const router = useRouter();
  const [resumeOrder, setResumeOrder] =
    useState<ResumeOrder>(INITIAL_RESUME_ORDER);

  const fetchResumeOrder = useCallback(async () => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      toast.error('로그인이 필요합니다.');
      router.replace('/signin');
      return;
    }

    const {data, success} = await ableJ.getResumeOrder(accessToken);

    if (!success) {
      toast.error('이력서 섹션 순서를 불러오는데 실패했습니다.');
      return;
    }

    setResumeOrder(data);
  }, [router]);

  useEffect(() => {
    (async () => await fetchResumeOrder())();
  }, [fetchResumeOrder]);

  return resumeOrder;
};

export default useResumeOrder;
