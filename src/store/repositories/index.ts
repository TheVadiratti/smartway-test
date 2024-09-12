import Repositories from './repositories.store';
import type { Repository } from './repositories.types';

const RepositoriesStore = new Repositories();

export { Repository };
export default RepositoriesStore;
