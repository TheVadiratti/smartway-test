import { makeAutoObservable } from 'mobx';
import type { RepositoryDto } from '../../services/types.dto';
import type { Repository } from './types';

export default class Repositories {
  repositories: RepositoryDto[] = [];

  favoriteRepositories: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRepositories(repositories: RepositoryDto[]) {
    this.repositories = repositories;
  }

  addFavoriteRepository(repository: Repository) {
    const isExist = this.favoriteRepositories.some(
      (item) => item.id === repository.id
    );

    if (!isExist) {
      this.favoriteRepositories.push(repository);
    }
  }

  resetFavoriteRepositories() {
    this.favoriteRepositories = [];
  }
}
