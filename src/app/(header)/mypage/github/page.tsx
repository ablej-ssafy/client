'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

import GithubLogin from '@/features/mypage/GithubLogin';
import GitHubRepository from '@/features/mypage/GithubRepository';
import {useRootStore} from '@/zustand/rootStore';

import styles from './page.module.scss';

const GithubPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const githubToken = useRootStore(state => state.gitHubToken);
  const setGitHubToken = useRootStore(state => state.setGitHubToken);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      setGitHubToken(accessToken);
      router.push('/mypage/github');
    }
  }, [router, setGitHubToken, searchParams]);

  return (
    <main className={styles.container}>
      {githubToken ? <GitHubRepository /> : <GithubLogin />}
    </main>
  );
};

export default GithubPage;
