import { observer } from 'mobx-react-lite';
import { type Repository } from '../../../../store/repositories';
import type Repositories from '../../../../store/repositories/repositories.store';
import RepositoryCard from '../../RepositoryCard';
import ListContainer from '../ListContainer';
import Styles from './SearchedRepositories.module.css';

interface Props {
  repositories: Repositories;
}

const SearchedRepositories = observer(({ repositories }: Props) => {
  const cardClickHandler = (repository: Repository) => () => {
    repositories.addFavoriteRepository(repository);
  };

  return (
    <div>
      <h3 className={Styles.heading}>Searched</h3>
      <ListContainer>
        {repositories.searchedRepositories.map((repository) => (
          <RepositoryCard
            repository={repository}
            onClick={cardClickHandler(repository)}
            key={repository.id}
          />
        ))}
      </ListContainer>
    </div>
  );
});

export default SearchedRepositories;
