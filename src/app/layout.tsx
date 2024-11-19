import '@/styles/index.scss';

import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {ReactNode} from 'react';
import {Toaster} from 'react-hot-toast';

// Pretendard 폰트 설정
const pretendard = localFont({
  src: [
    {path: './fonts/Pretendard-Thin.woff', weight: '100'},
    {path: './fonts/Pretendard-ExtraLight.woff', weight: '200'},
    {path: './fonts/Pretendard-Light.woff', weight: '300'},
    {path: './fonts/Pretendard-Regular.woff', weight: '400'},
    {path: './fonts/Pretendard-Medium.woff', weight: '500'},
    {path: './fonts/Pretendard-SemiBold.woff', weight: '600'},
    {path: './fonts/Pretendard-Bold.woff', weight: '700'},
    {path: './fonts/Pretendard-ExtraBold.woff', weight: '800'},
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Able Recruit',
  description:
    'AI 기반 맞춤형 채용 매칭 서비스. 이력서 업로드만으로 최적의 채용공고를 추천받고, 스마트한 이력서 작성부터 AI 면접 준비까지 원스톱으로 제공하는 차세대 취업 플랫폼입니다.',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body
        style={{
          fontFamily: "'Pretendard', sans-serif",
        }}
        className={`${pretendard.variable}`}
      >
        <Toaster
          position="top-center"
          toastOptions={{duration: 1000}}
          containerStyle={{zIndex: 99999}}
        />
        {children}
        {modal}
      </body>
    </html>
  );
}
