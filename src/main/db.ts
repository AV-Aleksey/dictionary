const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database('../../db.sqlite3', (err: any) => {
  if (err) console.error('Database opening error: ', err);
});

ipcMain.on('asynchronous-message', (event, arg) => {
  const sql = arg;
  database.all(sql, (err: any, rows: any) => {
    event.reply('asynchronous-reply', (err && err.message) || rows);
  });
});
