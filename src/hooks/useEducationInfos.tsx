import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import toast from 'react-hot-toast';

import ableJ from '@/services/ableJ';
import {GetEducationInfoResponseData} from '@/types/ableJ';

const useEducationInfos = () => {
  const [educationInfos, setEducationInfos] =
    useState<GetEducationInfoResponseData>({educationals: []});

  const router = useRouter();

  const getEducationInfo = useCallback(async () => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      toast.error('로그인이 필요합니다.');
      router.replace('/signin');
      return;
    }

    const response = await ableJ.getEducationInfo(accessToken);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    setEducationInfos(response.data);
  }, [router]);

  useEffect(() => {
    (async () => await getEducationInfo())();
  }, [getEducationInfo]);

  return educationInfos;
};

export default useEducationInfos;
