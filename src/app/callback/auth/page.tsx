'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {Suspense, useCallback, useEffect} from 'react';

import {useAuthStore} from '@/zustand/useAuthStore';

const Auth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const login = useAuthStore(state => state.login);

  const initialize = useCallback(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      login(accessToken, refreshToken);
      router.replace('/');
    }
  }, [router, searchParams]);

  useEffect(() => {
    initialize();
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
