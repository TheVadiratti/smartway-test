import { useParams } from 'react-router-dom';
import repositories from '../../store/repositories';
import NotFoundPage from '../NotFound';
import RepositoryPage from './Repository';

export default function RepositoryPageContainer() {
  const { id } = useParams();

  const repository = repositories.getRepositoryById(id!);

  if (!id || Number.isNaN(+id) || !repository) {
    return <NotFoundPage />;
  }

  return <RepositoryPage repository={repository} />;
}
