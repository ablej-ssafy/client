import {cookies} from 'next/headers';

export const dynamic = 'force-dynamic';

const cookieOptions = {
  secure: true,
  httpOnly: true,
  path: '/',
};

export const POST = async (request: Request) => {
  const response = request.json();
  const data = await response;

  const cookieStore = cookies();
  cookieStore.set('accessToken', data.accessToken, cookieOptions);
  cookieStore.set('refreshToken', data.refreshToken, cookieOptions);
  cookieStore.set('authenticated', 'true', {
    ...cookieOptions,
    httpOnly: false,
  });

  return new Response(null, {status: 200});
};
