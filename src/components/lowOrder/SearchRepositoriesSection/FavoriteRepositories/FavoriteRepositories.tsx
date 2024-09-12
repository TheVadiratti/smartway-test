import { observer } from 'mobx-react-lite';
import type Repositories from '../../../../store/repositories/repositories.store';
import Button from '../../../ui/Button';
import RepositoryCard from '../../RepositoryCard';
import ListContainer from '../ListContainer';
import Styles from './FavoriteRepositories.module.css';

interface Props {
  repositories: Repositories;
}

const FavoriteRepositories = observer(({ repositories }: Props) => {
  const resetClickHandler = () => {
    repositories.resetFavoriteRepositories();
  };

  return (
    <div>
      <div className={Styles.headingContainer}>
        <h3 className={Styles.heading}>Favorite</h3>
        <Button type="button" onClick={resetClickHandler}>
          Reset
        </Button>
      </div>
      <ListContainer>
        {repositories.favoriteRepositories.map((repository) => (
          <RepositoryCard
            id={repository.id}
            fullName={repository.fullName}
            url={repository.url}
            ownerAvatar={repository.ownerAvatar}
            starsCount={repository.starsCount}
            forksCount={repository.forksCount}
            key={repository.id}
          />
        ))}
      </ListContainer>
    </div>
  );
});

export default FavoriteRepositories;
