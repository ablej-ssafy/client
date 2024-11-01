'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {Suspense, useCallback, useEffect} from 'react';

import ableJ from '@/services/ableJ';
import {useAuthStore} from '@/zustand/useAuthStore';

const Auth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const login = useAuthStore(state => state.login);

  const initialize = useCallback(async () => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      login(accessToken, refreshToken);
      await ableJ.setCredentials(accessToken, refreshToken);
      router.replace('/');
    }
  }, [login, router, searchParams]);

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
