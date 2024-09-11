import { checkResponse } from '../../utils/api';
import config from '../config';

// Правило отключено для масштабируемости.
// eslint-disable-next-line import/prefer-default-export
export function fetchRepositories(query: string, signal: AbortSignal) {
  return fetch(
    `${config.API_ORIGIN}${config.API_ACTION}${config.endpoints.repositoriesByQuery(query)}`,
    {
      method: 'GET',
      signal,
    }
  ).then(checkResponse);
}
