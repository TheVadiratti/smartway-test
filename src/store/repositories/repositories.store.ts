import { makeAutoObservable } from 'mobx';
import type { Repository } from './types';

export default class Repositories {
  searchedRepositories: Repository[] = [];

  favoriteRepositories: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSearchedRepositories(repositories: Repository[]) {
    this.searchedRepositories = repositories;
  }

  resetSearchedRepositories() {
    this.searchedRepositories = [];
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
