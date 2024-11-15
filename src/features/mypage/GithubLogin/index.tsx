'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {FaGithub} from 'react-icons/fa6';

import ReportImage from '@/assets/images/report.png';

import styles from './githubLogin.module.scss';

const GithubLogin = () => {
  const router = useRouter();

  const handleGitHubLogin = (): void => {
    router.push(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/github/authorize?redirect_url=http://localhost:3000/mypage/github`,
    );
  };

  return (
    <div className={styles.container}>
      <Image width={300} height={360} src={ReportImage} alt="레포트 이미지" />
      <div>
        <p className={styles.title}>
          프로젝트 분석 보고서를 받아보고 싶지 않으신가요?
        </p>
        <p className={styles.script}>
          AI 분석을 통해 프로젝트의 강점을 알아보고 더 쉽게 포트폴리오를
          작성하세요
        </p>
        <button onClick={handleGitHubLogin}>
          <FaGithub />
          GitHub 연결하기
        </button>
      </div>
    </div>
  );
};

export default GithubLogin;
