'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {useCallback, useEffect} from 'react';
import toast from 'react-hot-toast';

import ableJ from '@/services/ableJ';

const VerifyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const key = searchParams.get('key');

  if (!key) {
    router.back();
  }

  const verifyEmail = useCallback(async () => {
    const response = await ableJ.verifyEmail(key!);

    if (!response.success) {
      toast.error('이메일 인증에 실패하였습니다.');
      router.back();
      return;
    }

    toast.success('이메일 인증에 성공하였습니다. 로그인 해주세요.');
    router.replace('/');
  }, [key, router]);

  useEffect(() => {}, [(async () => await verifyEmail())()]);

  return null;
};

export default VerifyPage;
