import { callDataBase } from '../root/ConnectDataBase/callDataBase';
import { Action } from '../../../main/db/types';
import { CreateWord } from './endpoints';

export async function getWords() {
  return callDataBase(Action.getWords);
}

export async function createWord(payload: CreateWord['payload']) {
  return callDataBase(Action.createWord, payload);
}
