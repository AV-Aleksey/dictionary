import { Word } from '../models';
import { getAllWords } from './getAllWords';
import { Action } from '../types';

export const requestDataBase = async (
  action: Action,
  payload?: Record<any, any>
) => {
  switch (action) {
    case Action.getWords:
      return getAllWords();

    case Action.createWord:
      return Word.create({ ru: payload?.ru, eng: payload?.eng });

    default:
      return null;
  }
};
