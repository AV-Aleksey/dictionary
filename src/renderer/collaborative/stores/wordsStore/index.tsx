/* eslint-disable */
import { action, computed, flow, makeObservable, observable } from 'mobx';

import { getWords } from "../../repository";
import { Word } from "../../../../main/db/models";

export class WordsStore {
  private wordsList: Word[] | null = [];

  public initHasBeenDone = false;

  constructor() {
    makeObservable(this, {
      setWordLocally: action.bound,
      initHasBeenDone: observable,

      words: computed,
      initHasWasFished: computed,
    });
  }

  public initWords = flow(function* (this: WordsStore) {
    this.wordsList = yield getWords();
    console.log(this.wordsList);
    this.setInitStatus(true);
  });

  public setWordLocally(word: Word) {
    if (!this.wordsList) {
      throw new Error('please use init words');
    }

    this.wordsList.push(word);
  }

  private setInitStatus(status: boolean) {
    this.initHasBeenDone = status;
  }

  get initHasWasFished() {
    return this.initHasBeenDone;
  }

  get words() {
    return this.wordsList;
  }
}

export const wordStore = new WordsStore();
