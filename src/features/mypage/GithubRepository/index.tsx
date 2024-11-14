'use client';

import {Octokit} from '@octokit/rest';
import React, {useEffect, useState} from 'react';

import resumeUpdateAction from '@/actions/github/analysisGitHubAction';
import {useRootStore} from '@/zustand/rootStore';

interface Repository {
  name: string;
  owner: string;
  branches: string[];
}

const GitHubRepository = () => {
  const accessToken = useRootStore(state => state.gitHubToken);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [branches, setBranches] = useState<string[]>([]);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      const octokit = new Octokit({
        auth: `Bearer ${accessToken}`,
      });

      try {
        const {data: repos} = await octokit.repos.listForAuthenticatedUser();

        const repositoriesWithBranches: Repository[] = await Promise.all(
          repos.map(async repo => {
            const {data: branchesData} = await octokit.repos.listBranches({
              owner: repo.owner.login,
              repo: repo.name,
            });

            const branches = branchesData.map(branch => branch.name);
            return {
              name: repo.name,
              owner: repo.owner.login,
              branches,
            };
          }),
        );

        setRepositories(repositoriesWithBranches);
      } catch (error) {
        console.error('Failed to fetch repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [accessToken]);

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
    if (selectedRepo && selectedBranch && accessToken) {
      const selectedRepository = repositories.find(
        repo => repo.name === selectedRepo,
      );

      if (selectedRepository) {
        const response = await resumeUpdateAction(
          selectedRepository.owner,
          selectedRepository.name,
          selectedBranch,
          accessToken,
        );

        if (response.success) {
          setResultMessage('GitHub analysis request was successful.');
        } else {
          setResultMessage('GitHub analysis request failed.');
        }
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>GitHub Repository Selector</h2>

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
