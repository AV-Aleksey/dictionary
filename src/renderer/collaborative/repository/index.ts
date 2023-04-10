const sendDb = (message: string) => {
  return new Promise((resolve) => {
    window.electron.ipcRenderer.once('asynchronous-reply', (data) => {
      resolve(data);
    });
    window.electron.ipcRenderer.sendMessage('asynchronous-message', [message]);
  });
};

class Repository {
  public async addWord(ru: string, eng: string) {
    await sendDb(`INSERT INTO user (name, age) VALUES(${ru}, ${eng})`);

    return this.getWords();
  }

  // eslint-disable-next-line class-methods-use-this
  public async getWords() {
    return sendDb('SELECT * FROM user');
  }
}

export const repo = new Repository();
