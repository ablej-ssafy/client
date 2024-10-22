import '@/styles';

import type {Metadata} from 'next';
import localFont from 'next/font/local';

// Pretendard 폰트 설정
const pretendard = localFont({
  src: [
    {path: './fonts/Pretendard-Thin.woff', weight: '100'},
    {path: './fonts/Pretendard-ExtraLight.woff', weight: '200'},
    {path: './fonts/Pretendard-Light.woff', weight: '300'},
    {path: './fonts/Pretendard-Regular.woff', weight: '400'},
    {path: './fonts/Pretendard-Medium.woff', weight: '500'},
    {path: './fonts/Pretendard-SemiBold.woff', weight: '600'},
    {path: './fonts/Pretendard-ExtraLight.woff', weight: '700'},
    {path: './fonts/Pretendard-ExtraBold.woff', weight: '800'},
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Pretendard-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body
        style={{
          fontFamily: "'Pretendard', sans-serif",
        }}
        className={`${pretendard.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
