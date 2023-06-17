import { action, makeObservable, flow, toJS } from 'mobx';

import { Word } from 'renderer/collaborative/types';
import { WordsStore } from '../index';
import { createWord, deleteWords } from '../../../repository';
import { CreateWord } from '../../../repository/endpoints';

export class Control {
  public root;

  constructor(root: WordsStore) {
    this.root = root;

    makeObservable(this, {
      deleteWords: action.bound,
      createWord: action.bound,
      addWordLocally: action,
      deleteWordsLocally: action.bound,
    });
  }

  public deleteWords = flow(function* (this: Control, ids: number[]) {
    const wasDelete = yield deleteWords(ids);

    if (wasDelete) {
      this.deleteWordsLocally(ids);
    }
  });

  public createWord = flow(function* (
    this: Control,
    params: CreateWord['payload']
  ) {
    const { id } = yield createWord(params);

    this.addWordLocally({ id, ...params });
  });

  public addWordLocally(word: Word) {
    if (this.root.wordsList) {
      this.root.wordsList?.push(word);
    }
  }

  public deleteWordsLocally(wordIds: number[]) {
    if (this.root.wordsList) {
      this.root.wordsList = this.root.wordsList?.filter(
        ({ id }) => !wordIds.includes(id)
      );
    }
  }
}
