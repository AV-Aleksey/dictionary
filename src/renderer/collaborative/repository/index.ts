import { callDataBase } from '../root/ConnectDataBase/callDataBase';
import { CreateWord, DeleteWords, GetWords } from './endpoints';

export async function getWords() {
  return callDataBase<GetWords>('db_get_words');
}

export async function createWord(payload: CreateWord['payload']) {
  return callDataBase<CreateWord>('db_create_word', payload);
}

export async function deleteWords(payload: DeleteWords['payload']) {
  return callDataBase<DeleteWords>('db_delete_words', payload);
}
