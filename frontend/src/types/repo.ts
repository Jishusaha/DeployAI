export interface RepoData {
  name: string;
  owner: string;
  language: string | null;
  stars: number;
  visibility: string;

  forks: number;
  hasLicense: boolean;
  defaultBranch: string;

  hasReadme: boolean;
  hasPackageJson: boolean;
  hasDockerfile: boolean;
  hasGithubActions: boolean;

  description: string | null;
  avatar: string;
  homepage: string | null;

  framework: string;
  ecosystem: string;

  watchers: number;
  issues: number;
  size: number;
  updatedAt: string;
}
