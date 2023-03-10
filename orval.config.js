const genPath = './src/api';

module.exports = {
  'leg-user': {
    input: { target: 'https://0giri.com/api/v3/api-docs/1.leg-user' },
    output: {
      mode: 'tags-split', // Valid values: single, split, tags, tags-split
      target: `${genPath}/hooks.ts`,
      schemas: `${genPath}/types`,
      client: 'react-query',
      override: {
        mutator: { path: `./axios-instance.ts`, name: 'axiosInstance' },
        useQuery: true,
        useDates: false,
        query: { useQuery: true, useInfinite: true },
      },
    },
    hooks: { afterAllFilesWrite: `prettier --write ${genPath}` },
  },
};
