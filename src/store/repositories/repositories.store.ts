import { makeAutoObservable } from 'mobx';
import type { Repository } from './repositories.types';

export default class Repositories {
  favoriteRepositories: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavoriteRepository(repository: Repository) {
    this.favoriteRepositories.push(repository);
  }

  resetFavoriteRepositories() {
    this.favoriteRepositories = [];
  }
}
