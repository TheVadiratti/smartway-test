import type { RepositoryDto } from '../../services/types.dto';
import type { Repository } from './types';

// Правило отключено для масштабируемости.
// eslint-disable-next-line import/prefer-default-export
export function mapFromDtoToStoreData(dto: RepositoryDto[]): Repository[] {
  return dto.map((repository) => ({
    id: repository.id,
    fullName: repository.full_name,
    url: repository.url,
    ownerAvatar: repository.owner.avatar_url,
    starsCount: repository.stargazers_count,
    forksCount: repository.forks_count,
    description: repository.description,
    private: repository.private,
    watchersCount: repository.watchers_count,
    openIssues: repository.open_issues,
    language: repository.language,
  }));
}
