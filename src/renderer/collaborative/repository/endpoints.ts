import { Word } from '../../../main/db/models';
import { CreateWordPayload } from '../../../main/events/types';

export type GetWords = {
  payload: {};
  response: Promise<Word[]>;
};

export type CreateWord = {
  payload: CreateWordPayload;
  response: Promise<{ id: number }>;
};

export type DeleteWords = {
  payload: number[];
  response: Promise<{ deleted: boolean }>;
};
