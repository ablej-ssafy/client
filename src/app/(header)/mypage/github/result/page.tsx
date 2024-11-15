'use client';

import Lottie from 'lottie-react';
import Link from 'next/link';
import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

import animationData from '@/assets/lottie/SuccessfullyDone.json';

import styles from './result.module.scss';

const ResultPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const project = searchParams.get('project');

  useEffect(() => {
    if (!project) {
      router.push('/mypage/github');
    }
  }, [project, router]);

  return (
    <main className={styles.container}>
      <div>
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={true}
          style={{width: 140, height: 140}}
        />
      </div>
      <div>
        {project &&
          `${decodeURIComponent(project)} 프로젝트에 대한 분석 요청이 완료되었습니다.`}
      </div>
      <div>분석이 완료되면 가입하신 이메일로 보고서가 자동 발송됩니다.</div>
      <div>평균 소요 시간: 약 5분 (프로젝트 규모에 따라 상이)</div>
      <Link href="/mypage/github">다른 프로젝트도 분석하기</Link>
    </main>
  );
};

export default ResultPage;
