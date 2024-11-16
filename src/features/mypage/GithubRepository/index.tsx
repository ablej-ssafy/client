'use client';

import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';

import resumeUpdateAction from '@/actions/github/analysisGitHubAction';
import useGithubRepository from '@/hooks/useGithubRepository';
import {useRootStore} from '@/zustand/rootStore';

import styles from './githubRepository.module.scss';

type SelectedRepo = {
  owner: string;
  name: string;
  branch: string;
};

const GitHubRepository = () => {
  const githubToken = useRootStore(state => state.githubToken);
  const {repositories, loading} = useGithubRepository();
  const [selectedRepo, setSelectedRepo] = useState<SelectedRepo | null>(null);
  const [branches, setBranches] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (repositories.length > 0 && !selectedRepo) {
      const firstRepo = repositories[0];

      setSelectedRepo({
        owner: firstRepo.owner,
        name: firstRepo.name,
        branch: firstRepo.branches[0],
      });
      setBranches(firstRepo.branches);
    }
  }, [repositories]);

  const handleRepoSelect = (repoOwner: string, repoName: string) => {
    const selectedRepo = repositories.find(
      repo => repo.owner === repoOwner && repo.name === repoName,
    );

    if (selectedRepo) {
      setSelectedRepo({
        owner: repoOwner,
        name: repoName,
        branch: selectedRepo.branches[0],
      });
      setBranches(selectedRepo.branches);
    }
  };

  const handleBranchSelect = (branchName: string) => {
    setSelectedRepo(prev => prev && {...prev, branch: branchName});
  };

  const handleButtonClick = async () => {
    if (selectedRepo && githubToken) {
      const response = await resumeUpdateAction(
        selectedRepo.owner,
        selectedRepo.name,
        selectedRepo.branch,
        githubToken,
      );

      if (response.success) {
        router.push(
          `/mypage/github/result?project=${encodeURIComponent(
            `${selectedRepo.owner}/${selectedRepo.name}`,
          )}`,
        );
      }
    }
  };

  if (loading)
    return (
      <div className={styles['load-container']}>
        <div className={styles.loader}></div>
      </div>
    );

  return (
    <div className={styles.container}>
      <h3>
        <span>1</span>분석할 Repository를 선택해주세요
      </h3>
      <div className={styles['card-container']}>
        {repositories.length > 0 ? (
          repositories.map(repo => (
            <div
              key={`${repo.owner} / ${repo.name}`}
              className={`${styles.card} ${
                selectedRepo &&
                selectedRepo.owner === repo.owner &&
                selectedRepo.name === repo.name &&
                styles.selected
              }`}
              onClick={() => handleRepoSelect(repo.owner, repo.name)}
            >
              {`${repo.owner} / ${repo.name}`}
            </div>
          ))
        ) : (
          <div className={styles['empty-message']}>Repository가 없습니다</div>
        )}
      </div>

      {selectedRepo && (
        <div className={styles['branch-container']}>
          <h3>
            <span>2</span>분석할 Branch를 선택해주세요
          </h3>
          <div className={styles.branch}>
            {branches.length > 0 ? (
              branches.map(branch => (
                <div
                  key={branch}
                  className={`${styles['branch-card']} ${
                    selectedRepo.branch === branch && styles.selected
                  }`}
                  onClick={() => handleBranchSelect(branch)}
                >
                  {branch}
                </div>
              ))
            ) : (
              <div className={styles['empty-message']}>Branch가 없습니다</div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={handleButtonClick}
        disabled={!selectedRepo}
        className={`${styles.btn} ${selectedRepo ? styles['btn-active'] : ''}`}
      >
        분석하기
      </button>
    </div>
  );
};

export default GitHubRepository;
