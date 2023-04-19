import { Sequelize } from 'sequelize-typescript';
import sqlite3 from 'sqlite3';
import path from 'path';

import * as models from './models';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: path.resolve(__dirname, 'dictionaries.db'),
  models: Object.values(models),
});
