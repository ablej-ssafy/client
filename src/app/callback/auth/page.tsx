'use client';

import {deleteCookie, getCookie} from 'cookies-next';
import {useRouter, useSearchParams} from 'next/navigation';
import {Suspense, useCallback, useEffect} from 'react';

import {AUTH_REDIRECT_KEY} from '@/constants/cookie';
import ableJ from '@/services/ableJ';

const Auth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialize = useCallback(async () => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const redirectURL = getCookie(AUTH_REDIRECT_KEY);

    if (accessToken && refreshToken) {
      await ableJ.setCredentials(accessToken, refreshToken);
      deleteCookie(AUTH_REDIRECT_KEY);
      router.replace(redirectURL || '/');
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
