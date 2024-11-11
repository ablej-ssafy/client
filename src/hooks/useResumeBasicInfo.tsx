import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import toast from 'react-hot-toast';

import ableJ from '@/services/ableJ';
import {ResumeBasicInfo} from '@/types/ableJ';

const useResumeBasicInfo = () => {
  const [basicInfo, setBasicInfo] = useState<ResumeBasicInfo>();
  const router = useRouter();

  const getResumeBasicInfo = useCallback(async () => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      toast.error('로그인이 필요합니다.');
      router.replace('/signin');
      return;
    }

    const response = await ableJ.getResumeBasicInfo(accessToken);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    setBasicInfo(response.data);
  }, [router]);

  useEffect(() => {
    (async () => await getResumeBasicInfo())();
  }, [getResumeBasicInfo]);

  return basicInfo;
};

export default useResumeBasicInfo;
