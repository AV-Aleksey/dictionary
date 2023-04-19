import { callDataBase } from '../root/ConnectDataBase/callDataBase';
import { CreateWord, GetWords } from './endpoints';

export async function getWords() {
  return callDataBase<GetWords>('db_get_words');
}

export async function createWord(payload: CreateWord['payload']) {
  return callDataBase<CreateWord>('db_create_word', payload);
}
