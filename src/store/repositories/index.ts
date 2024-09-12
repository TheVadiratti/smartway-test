import { mapFromDtoToStoreData } from './mappers';
import Repositories from './repositories.store';
import type { Repository } from './types';

const RepositoriesStore = new Repositories();

export { Repository, mapFromDtoToStoreData };
export default RepositoriesStore;
