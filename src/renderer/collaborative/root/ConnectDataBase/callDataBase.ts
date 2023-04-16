import { Action } from '../../../../main/db/types';

export const callDataBase = (action: Action, payload?: Record<string, any>) => {
  return new Promise((resolve) => {
    window.electron.ipcRenderer.once('asynchronous-reply', (data) => {
      resolve(data);
    });
    window.electron.ipcRenderer.sendMessage('asynchronous-message', [
      action,
      payload,
    ]);
  });
};
