'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {Suspense, useCallback, useEffect} from 'react';

import ableJ from '@/services/ableJ';

const Auth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialize = useCallback(async () => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      await ableJ.setCredentials(accessToken, refreshToken);
      router.replace('/');
    }
  }, [router, searchParams]);

  useEffect(() => {
    (async () => initialize())();
  }, [initialize]);

  return null;
};

const AuthCallBackPage = () => {
  return (
    <Suspense>
      <Auth />
    </Suspense>
  );
};

export default AuthCallBackPage;
