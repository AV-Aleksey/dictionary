import { action, makeObservable, observable, flow, computed } from 'mobx';
import { WordsStore } from '../index';
import { deleteWords } from '../../../repository';

export class Control {
  public root;

  /** @description - Активация режима удаления */
  public isDeleteMode = false;

  /** @description - Активация режима редактирования */
  public isUpdateMode = false;

  /** @description - Массив id слов, которые необходимо удалить */
  public toDeleteWords: Record<number, boolean> = {};

  /** @description - Массив слов для обновления */
  public toUpdateWords = [];

  constructor(root: WordsStore) {
    this.root = root;

    makeObservable(this, {
      isDeleteMode: observable,
      isUpdateMode: observable,

      deleteWords: action.bound,
      addWordToDelete: action.bound,
      activateDeleteMode: action.bound,
      activateUpdateMode: action.bound,

      toDeleteWordIds: computed,
    });
  }

  public deleteWords = flow(function* (this: Control) {
    const status = yield deleteWords(this.toDeleteWordIds);
    console.log(status);
    this.root.deleteWordsLocally(this.toDeleteWordIds);

    this.toDeleteWords = {};
  });

  public addWordToDelete(word: Record<number, boolean>) {
    this.toDeleteWords = {
      ...this.toDeleteWords,
      ...word,
    };
  }

  public activateDeleteMode(value: boolean) {
    this.isDeleteMode = value;
  }

  public activateUpdateMode(value: boolean) {
    this.isUpdateMode = value;
  }

  get toDeleteWordIds() {
    return Object.entries(this.toDeleteWords).reduce<number[]>(
      (acc, [id, checked]) => {
        if (checked) {
          acc.push(Number(id));
        }

        return acc;
      },
      []
    );
  }
}
