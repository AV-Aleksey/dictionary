import { ipcMain } from 'electron';

import { Word } from '../db/models';

import { CreateWordPayload } from './types';

ipcMain.on('db_create_word', async (event, payload: CreateWordPayload) => {
  const createdWord = await Word.create(payload, { raw: true });
  event.reply('asynchronous-reply', createdWord.id);
});

ipcMain.on('db_get_words', async (event) => {
  const words = await Word.findAll({ raw: true });
  event.reply('asynchronous-reply', words);
});
