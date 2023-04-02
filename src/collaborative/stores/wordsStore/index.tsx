import { action, computed, makeObservable, observable } from 'mobx';
import { Word } from '../../types';

export class WordsStore {
  private wordsList = [] as Word[];

  constructor() {
    makeObservable(this, {
      setWord: action,

      words: computed,
    });
  }

  public setWord(word: Word) {
    // @todo - добавить сохранение в db
    this.wordsList.push(word);
  }

  get words() {
    return this.wordsList;
  }
}

export const wordStore = new WordsStore();
