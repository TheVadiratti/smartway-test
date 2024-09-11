export default {
  API_ORIGIN: 'https://api.github.com',
  API_ACTION: '/search',

  endpoints: {
    repositoriesByQuery: (query: string) => `/repositories?q=${query}`,
  },
} as const;
