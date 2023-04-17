import { Word } from '../../../main/db/models';
import { CreateWordPayload } from '../../../main/events/types';

export type GetWords = {
  payload: {};
  response: Promise<Word[]>;
};

export type CreateWord = {
  response: Promise<{ id: number }>;
  payload: CreateWordPayload;
};
