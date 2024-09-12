import type { RepositoryDto } from '../../../../services/types.dto';
import RepositoryCard from '../../RepositoryCard';
import ListContainer from '../ListContainer';
import Styles from './SearchedRepositories.module.css';

interface Props {
  repositoriesList: RepositoryDto[];
}

export default function SearchedRepositories({ repositoriesList }: Props) {
  return (
    <div>
      <h3 className={Styles.heading}>Searched</h3>
      <ListContainer>
        {repositoriesList.map((repository) => (
          <RepositoryCard
            id={repository.id}
            fullName={repository.full_name}
            url={repository.url}
            ownerAvatar={repository.owner.avatar_url}
            starsCount={repository.stargazers_count}
            forksCount={repository.forks_count}
            key={repository.id}
          />
        ))}
      </ListContainer>
    </div>
  );
}
