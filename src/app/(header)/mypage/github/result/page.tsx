'use client';

import Lottie from 'lottie-react';
import Link from 'next/link';
import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';
import {MdOutlineArrowForwardIos} from 'react-icons/md';

import animationData from '@/assets/lottie/CheckOrigin.json';

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
      {project && (
        <>
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={true}
            style={{width: 60, height: 60}}
          />
          <div className={styles.project}>
            <span>{`${decodeURIComponent(project)}`}</span>
            &nbsp;분석 요청이 완료되었습니다.
          </div>
          <div className={styles.script}>
            <div>
              분석이 완료되면 가입하신 이메일로 보고서가 자동 발송됩니다.
            </div>
            <div>평균 소요 시간: 약 5분 (프로젝트 규모에 따라 상이)</div>
          </div>
          <Link href="/mypage/github">
            다른 프로젝트도 분석하기
            <MdOutlineArrowForwardIos />
          </Link>
        </>
      )}
    </main>
  );
};

export default ResultPage;
