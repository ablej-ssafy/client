import {cookies} from 'next/headers';
import {NextRequest, NextResponse} from 'next/server';

import ableJ from '@/services/ableJ';

export const middleware = async (request: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.redirect(request.nextUrl.origin + '/signin');
  }

  const response = await ableJ.getProfile(accessToken);

  if (!response.success) {
    return NextResponse.redirect(request.nextUrl.origin + '/verify-email');
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/resume', '/mypage/github'],
};
