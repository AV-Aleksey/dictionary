import { useContext } from 'react';
import { WordsStoreContext } from './context';

export const useWordStore = () => {
  const store = useContext(WordsStoreContext);

  if (!store) {
    throw new Error('WordStore should be used in context!');
  }

  return store;
};
