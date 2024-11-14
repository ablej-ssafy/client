'use client';

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
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleRepoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const repoName = event.target.value;
    setSelectedRepo(repoName);
    setSelectedBranch(null);
    const selectedRepo = repositories.find(repo => repo.name === repoName);
    if (selectedRepo) {
      setBranches(selectedRepo.branches);
    }
  };

  const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(event.target.value);
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

        setResultMessage(
          response.success
            ? 'GitHub analysis request was successful.'
            : 'GitHub analysis request failed.',
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
    <div>
      <label>
        Select Repository:
        <select value={selectedRepo || ''} onChange={handleRepoChange}>
          <option value="" disabled>
            -- Select a Repository --
          </option>
          {repositories.map(repo => (
            <option key={repo.name} value={repo.name}>
              {repo.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select Branch:
        <select
          value={selectedBranch || ''}
          onChange={handleBranchChange}
          disabled={!selectedRepo}
        >
          <option value="" disabled>
            -- Select a Branch --
          </option>
          {branches.map(branch => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </label>

      <button
        onClick={handleButtonClick}
        disabled={!selectedRepo || !selectedBranch}
      >
        Confirm Selection
      </button>

      {resultMessage && <p>{resultMessage}</p>}
    </div>
  );
};

export default GitHubRepository;
