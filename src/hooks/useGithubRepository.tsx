import {Octokit} from '@octokit/rest';
import {useEffect, useState} from 'react';

import {useRootStore} from '@/zustand/rootStore';

interface Repository {
  name: string;
  owner: string;
  branches: string[];
}

const reorderBranches = (branches: string[]): string[] => {
  const mainOrMaster = branches.find(
    branch => branch === 'main' || branch === 'master',
  );
  if (mainOrMaster) {
    return [
      mainOrMaster,
      ...branches.filter(branch => branch !== mainOrMaster),
    ];
  }
  return branches;
};

const useGitHubRepository = () => {
  const githubToken = useRootStore(state => state.githubToken);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!githubToken) {
        setLoading(false);
        return;
      }

      const octokit = new Octokit({
        auth: `Bearer ${githubToken}`,
      });

      try {
        const {data: repos} = await octokit.repos.listForAuthenticatedUser();

        const repositoriesWithBranches: Repository[] = await Promise.all(
          repos.map(async repo => {
            const {data: branchesData} = await octokit.repos.listBranches({
              owner: repo.owner.login,
              repo: repo.name,
            });

            const branches = reorderBranches(
              branchesData.map(branch => branch.name),
            );

            return {
              name: repo.name,
              owner: repo.owner.login,
              branches,
            };
          }),
        );

        setRepositories(repositoriesWithBranches);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [githubToken]);

  return {repositories, loading};
};

export default useGitHubRepository;
