import { useState } from 'react';
import type { RepositoryDto } from '../../../services/types.dto';
import SearchedRepositories from './SearchedRepositories';
import Styles from './SearchRepositoriesSection.module.css';
import SectionHeader from './SectionHeader';

export default function SearchRepositoriesSection() {
  const [foundRepositories, setFoundRepositories] = useState<RepositoryDto[]>(
    []
  );

  const setFoundRepositoriesHandler = (list: RepositoryDto[]) => {
    setFoundRepositories(list);
  };

  return (
    <section className={Styles.container}>
      <SectionHeader
        setFoundRepositoriesHandler={setFoundRepositoriesHandler}
      />
      <SearchedRepositories repositoriesList={foundRepositories} />
    </section>
  );
}
