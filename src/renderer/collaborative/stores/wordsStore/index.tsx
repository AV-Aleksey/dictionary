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

      setWordLocally: action.bound,
      initHasBeenDone: observable,

      words: computed,
      initHasWasFished: computed,
    });
  }

  public initWords = flow(function* (this: WordsStore) {
    this.wordsList = yield getWords();

    this.setInitStatus(true);
  });

  public createWord = flow(function* (this: WordsStore, params: CreateWord['payload']) {
    const { id } = yield createWord(params);
    this.setWordLocally({ id, ...params })
  })

  public setWordLocally(word: Word) {
    this.wordsList?.push(word);
  }

  public deleteWordsLocally(wordIds: number[]) {
    if (this.wordsList) {
      this.wordsList = this.wordsList?.filter(({ id }) => !wordIds.includes(id))
    }
  }

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
