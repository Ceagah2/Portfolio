import axios from "axios";

const GITHUB_API = "https://api.github.com";
const GITHUB_USERNAME = "Ceagah2"; 
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const fetchFromGitHub = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados da URL ${url}:`, error);
    return null;
  }
};

export const fetchRepositories = async (): Promise<any[]> => {
  const repos = await fetchFromGitHub(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos`
  );
  return repos || [];
};

export const fetchCommits = async (): Promise<number> => {
  const repos = await fetchRepositories();
  let totalCommits = 0;

  for (const repo of repos) {
    const commits = await fetchFromGitHub(
      `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repo.name}/commits`
    );
    totalCommits += commits ? commits.length : 0;
  }

  return totalCommits;
};

export const fetchPullRequests = async (): Promise<number> => {
  const repos = await fetchRepositories();
  let totalPRs = 0;

  for (const repo of repos) {
    const pulls = await fetchFromGitHub(
      `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repo.name}/pulls?state=all`
    );
    totalPRs += pulls ? pulls.length : 0;
  }

  return totalPRs;
};

export const countRepositories = async (): Promise<number> => {
  const repos = await fetchRepositories();
  return repos.length;
};

export const fetchAllGitHubData = async () => {
  const commits = await fetchCommits();
  const prs = await fetchPullRequests();
  const repos = await countRepositories();

  return {
    commits,
    prs,
    repos,
  };
};
