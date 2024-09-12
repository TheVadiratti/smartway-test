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
      this.favoriteRepositories.unshift(repository);
    }
  }

  resetFavoriteRepositories() {
    this.favoriteRepositories = [];
  }

  getRepositoryById(id: string) {
    let repository;

    repository = this.favoriteRepositories.find(
      (item) => item.id === Number(id)
    );

    if (repository) return repository;

    repository = this.searchedRepositories.find(
      (item) => item.id === Number(id)
    );

    if (repository) return repository;

    return null;
  }
}
