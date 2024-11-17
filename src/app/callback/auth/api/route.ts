import {cookies} from 'next/headers';

export const dynamic = 'force-dynamic';

const cookieOptions = {
  secure: true,
  httpOnly: true,
  path: '/',
  domain: '.noteme.kro.kr',
};

export const POST = async (request: Request) => {
  const response = request.json();
  const data = await response;

  const cookieStore = cookies();
  cookieStore.set('refreshToken', data.refreshToken, cookieOptions);
  cookieStore.set('accessToken', data.accessToken, {
    ...cookieOptions,
    httpOnly: false,
  });
  cookieStore.set('authenticated', 'true', {
    ...cookieOptions,
    httpOnly: false,
  });

  return new Response(null, {status: 200});
};
