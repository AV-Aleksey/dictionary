import { Word } from '../models';

export const getAllWords = () => {
  return Word.findAll({ raw: true });
};
