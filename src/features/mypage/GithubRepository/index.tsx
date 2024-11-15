'use client';

import {useRouter} from 'next/navigation';
import React, {useState} from 'react';

import resumeUpdateAction from '@/actions/github/analysisGitHubAction';
import useGithubRepository from '@/hooks/useGithubRepository';
import {useRootStore} from '@/zustand/rootStore';

import styles from './githubRepository.module.scss';

const GitHubRepository = () => {
  const githubToken = useRootStore(state => state.githubToken);
  const {repositories, loading} = useGithubRepository();
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [branches, setBranches] = useState<string[]>([]);
  const router = useRouter();

  const handleRepoSelect = (repoName: string) => {
    setSelectedRepo(repoName);
    setSelectedBranch(null);
    const selectedRepo = repositories.find(repo => repo.name === repoName);
    if (selectedRepo) {
      setBranches(selectedRepo.branches);
    }
  };

  const handleBranchSelect = (branchName: string) => {
    setSelectedBranch(branchName);
  };

  const handleButtonClick = async () => {
    if (selectedRepo && selectedBranch && githubToken) {
      const selectedRepository = repositories.find(
        repo => repo.name === selectedRepo,
      );

      if (selectedRepository) {
        const response = await resumeUpdateAction(
          selectedRepository.owner,
          selectedRepository.name,
          selectedBranch,
          githubToken,
        );

        if (response.success) {
          router.push(
            `/mypage/github/result?project=${encodeURIComponent(selectedRepo)}`,
          );
        }
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
              key={repo.name}
              className={`${styles.card} ${
                selectedRepo === repo.name && styles.selected
              }`}
              onClick={() => handleRepoSelect(repo.name)}
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
          <div className={styles['branch']}>
            {branches.length > 0 ? (
              branches.map(branch => (
                <div
                  key={branch}
                  className={`${styles['branch-card']} ${
                    selectedBranch === branch && styles.selected
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
        disabled={!selectedRepo || !selectedBranch}
        className={`${styles.btn} ${
          selectedRepo && selectedBranch && styles['btn-active']
        }`}
      >
        분석하기
      </button>
    </div>
  );
};

export default GitHubRepository;
