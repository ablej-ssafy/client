import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import toast from 'react-hot-toast';

import ableJ from '@/services/ableJ';
import {GetResumeInfoResponseData} from '@/types/ableJ';

const useResumeInfo = () => {
  const router = useRouter();
  const [resumeInfo, setResumeInfo] = useState<GetResumeInfoResponseData>();

  const fetchResumeInfo = useCallback(async () => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      router.replace('/signin');
      return;
    }

    const {data, success} = await ableJ.getResumeInfo(accessToken);

    if (!success) {
      toast.error('이력서 정보를 불러오는데 실패했습니다.');
      return;
    }

    setResumeInfo(data);
  }, [router]);

  useEffect(() => {
    (async () => await fetchResumeInfo())();
  }, [fetchResumeInfo]);

  return {resumeInfo, fetchResumeInfo};
};

export default useResumeInfo;
