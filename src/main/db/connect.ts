import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import * as models from './models';

const sqlite3 = require('sqlite3');

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: path.resolve(__dirname, 'dictionaries.db'),
  models: Object.values(models),
});
