import {
  AllowNull,
  AutoIncrement,
  Column,
  Comment,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

@Table({
  timestamps: false,
})
export class BaseModel<M extends Model> extends Model<
  InferAttributes<M>,
  InferCreationAttributes<M>
> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Comment('id')
  @Column(DataType.BIGINT)
  public id!: CreationOptional<number>;
}
