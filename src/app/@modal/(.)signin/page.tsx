'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useEffect} from 'react';

import LoginStep from '@/features/auth/LoginStep';

const SignInModal = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/(.)signin') {
      router.replace('/signin');
    }
  }, [pathname, router]);

  return <LoginStep isModal={true} />;
};

export default SignInModal;
