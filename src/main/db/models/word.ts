import {
  Table,
  Column,
  DataType,
  AllowNull,
  Comment,
} from 'sequelize-typescript';
import { BaseModel } from './baseModel';

@Table({ tableName: 'word', timestamps: false })
// eslint-disable-next-line no-use-before-define
export default class Word extends BaseModel<Word> {
  @AllowNull(false)
  @Comment('')
  @Column(DataType.STRING)
  public ru!: string;

  @AllowNull(false)
  @Comment('')
  @Column(DataType.STRING)
  public eng!: string;
}
