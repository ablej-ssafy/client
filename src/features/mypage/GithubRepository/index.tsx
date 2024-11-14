'use client';

import {Octokit} from '@octokit/rest';
import React, {useEffect, useState} from 'react';

import {useRootStore} from '@/zustand/rootStore';

interface Repository {
  name: string;
  owner: string;
  branches: string[];
}

const GitHubRepository = () => {
  const accessToken = useRootStore(state => state.gitHubToken);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

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
        // 사용자 레포지토리 목록 가져오기
        const {data: repos} = await octokit.repos.listForAuthenticatedUser();

        // 각 레포지토리에 대해 브랜치 목록 가져오기
        const repositoriesWithBranches: Repository[] = await Promise.all(
          repos.map(async repo => {
            const {data: branchesData} = await octokit.repos.listBranches({
              owner: repo.owner.login,
              repo: repo.name,
            });

            // 브랜치 이름 목록 추출
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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Repository List</h2>
      {repositories.map(repo => (
        <div key={repo.name}>
          <h3>name: {repo.name}</h3>
          <p>Owner: {repo.owner}</p>
          <p>Branches:</p>
          <ul>
            {repo.branches.map(branch => (
              <li key={branch}>{branch}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepository;
