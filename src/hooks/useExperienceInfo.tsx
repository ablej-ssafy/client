import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import toast from 'react-hot-toast';

import ableJ from '@/services/ableJ';
import {ExperienceInfo} from '@/types/ableJ';

const useExperienceInfo = (type: 'company' | 'activity' | 'project') => {
  const [experienceInfo, setExperienceInfo] = useState<ExperienceInfo[]>([]);

  const router = useRouter();

  const getExperienceInfo = useCallback(async () => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      toast.error('로그인이 필요합니다.');
      router.replace('/signin');
      return;
    }

    const response = await ableJ.getExperienceInfo(type, accessToken);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    setExperienceInfo(response.data.experiences);
  }, [router, type]);

  useEffect(() => {
    (async () => await getExperienceInfo())();
  }, [getExperienceInfo]);

  return experienceInfo;
};

export default useExperienceInfo;
