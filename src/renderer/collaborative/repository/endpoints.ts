import { Word } from '../../../main/db/models';

export type GetWords = {
  response: Word[];
};

export type CreateWord = {
  response: { id: number };
  payload: { ru: string; eng: string };
};
