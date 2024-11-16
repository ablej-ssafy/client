import {cookies} from 'next/headers';
import {NextRequest, NextResponse} from 'next/server';

import ableJ from '@/services/ableJ';

import {AUTH_REDIRECT_KEY} from './constants/cookie';

export const middleware = async (request: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    const response = NextResponse.redirect(new URL('/signin', request.url));

    response.cookies.set(AUTH_REDIRECT_KEY, request.nextUrl.pathname, {
      httpOnly: false,
      path: '/',
      maxAge: 60 * 5,
    });

    return response;
  }

  const response = await ableJ.getProfile(accessToken);

  if (!response.success) {
    return NextResponse.redirect(new URL('/verify-email', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/resume', '/portfolio', '/mypage/github'],
};
