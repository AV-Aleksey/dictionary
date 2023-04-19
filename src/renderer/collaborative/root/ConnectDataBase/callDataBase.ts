import { Channels } from '../../../../main/preload';

type BaseProps = {
  payload: any;
  response: Promise<any>;
};

export function callDataBase<T extends BaseProps>(
  channel: Channels,
  payload?: T['payload']
): T['response'] {
  return new Promise((resolve) => {
    window.electron.ipcRenderer.once('asynchronous-reply', (data) => {
      resolve(data);
    });
    window.electron.ipcRenderer.sendMessage(channel, [payload]);
  }) as T['response'];
}
