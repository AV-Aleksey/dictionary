/* eslint-disable */
import { action, computed, flow, makeObservable, observable, isAction } from 'mobx';

import { createWord, getWords } from "../../repository";
import { CreateWord } from "../../repository/endpoints";
import { Control } from "./control";

type Word = {
  id: number;
  ru: string;
  eng: string;
}

export class WordsStore {
  public control = new Control(this);

  public wordsList: Word[] | null = [];

  public initHasBeenDone = false;

  constructor() {
    makeObservable(this, {
      wordsList: observable,
      control: observable,

      initHasBeenDone: observable,

      initHasWasFished: computed,
    });
  }



  public initWords = flow(function* (this: WordsStore) {
    this.wordsList = yield getWords();

    this.setInitStatus(true);
  });

  private setInitStatus(status: boolean) {
    this.initHasBeenDone = status;
  }

  get initHasWasFished() {
    return this.initHasBeenDone;
  }

  get words() {
    if (!this.wordsList) {
      throw new Error('please use init words');
    }

    return this.wordsList;
  }
}

export const wordStore = new WordsStore();
