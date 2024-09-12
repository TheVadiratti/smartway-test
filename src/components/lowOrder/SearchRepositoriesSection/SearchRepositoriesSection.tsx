import repositories from '../../../store/repositories';
import FavoriteRepositories from './FavoriteRepositories';
import SearchedRepositories from './SearchedRepositories';
import Styles from './SearchRepositoriesSection.module.css';
import SectionHeader from './SectionHeader';

export default function SearchRepositoriesSection() {
  return (
    <section className={Styles.container}>
      <SectionHeader />
      <SearchedRepositories repositories={repositories} />
      <FavoriteRepositories repositories={repositories} />
    </section>
  );
}
