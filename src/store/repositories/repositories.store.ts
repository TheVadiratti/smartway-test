import { makeAutoObservable } from 'mobx';
import type { RepositoryDto } from '../../services/types.dto';

export default class Repositories {
  repositories: RepositoryDto[] = [];

  favoriteRepositories: RepositoryDto[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRepositories(repositories: RepositoryDto[]) {
    this.repositories = repositories;
  }

  resetRepositories() {
    this.repositories = [];
  }

  addFavoriteRepository(repository: RepositoryDto) {
    this.favoriteRepositories.push(repository);
  }

  resetFavoriteRepositories() {
    this.favoriteRepositories = [];
  }
}
