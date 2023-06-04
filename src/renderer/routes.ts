export const routes = {
  main: {
    path: '/',
    children: {
      training: {
        path: '/training',
      },
      words: {
        path: '/words',
      },
    },
  },
};
