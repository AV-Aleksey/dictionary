import { createContext } from 'react';
import { WordsStore } from './index';

export const WordsStoreContext = createContext<WordsStore | null>(null);
