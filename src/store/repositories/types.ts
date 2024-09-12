export interface Repository {
  id: number;
  fullName: string;
  url: string;
  ownerAvatar: string;
  starsCount: number;
  forksCount: number;
  description: string;
  private: boolean;
  watchersCount: number;
  openIssues: number;
  language: string;
}
