import { ipcMain } from 'electron';

import { Word } from '../db/models';

import { CreateWordPayload, DeleteWordPayload } from './types';

ipcMain.on('db_delete_words', async (event, payload: DeleteWordPayload) => {
  try {
    await Word.destroy({ where: { id: payload } });
    event.reply('asynchronous-reply', { deleted: true });
  } catch (e) {
    event.reply('asynchronous-reply', { deleted: false });
  }
});

ipcMain.on('db_create_word', async (event, payload: CreateWordPayload) => {
  try {
    const createdWord = await Word.create(payload, { raw: true });
    event.reply('asynchronous-reply', { id: createdWord.id });
  } catch (e) {
    event.reply('asynchronous-reply', { id: null });
  }
});

ipcMain.on('db_get_words', async (event) => {
  const words = await Word.findAll({ raw: true });
  event.reply('asynchronous-reply', words);
});
