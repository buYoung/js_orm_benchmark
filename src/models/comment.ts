import {
    Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo, HasMany,
} from 'sequelize-typescript';
import { user } from './user';
import { file } from 'src/models/file';

export interface commentAttributes {
    id?: number;
    comment: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    userId?: number;
}

@Table({ tableName: 'comment', timestamps: false })
export class comment
    extends Model<commentAttributes, commentAttributes>
    implements commentAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    comment!: string;

    @Column({ type: DataType.DATE })
    createdAt!: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    deletedAt?: Date;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => user)
    userId?: number;

    @BelongsTo(() => user)
    user: user;

    @HasMany(() => file)
    file: file[];
}
