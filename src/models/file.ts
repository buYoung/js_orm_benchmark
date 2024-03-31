import {
    Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo, HasMany,
} from 'sequelize-typescript';
import { comment } from './comment';
import { fileInfo } from './fileInfo';

export interface fileAttributes {
    id?: number;
    fileName: string;
    fileType: string;
    uploadedAt: Date;
    commentsId?: number;
}

@Table({ tableName: 'file', timestamps: false })
export class file
    extends Model<fileAttributes, fileAttributes>
    implements fileAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    fileName!: string;

    @Column({ type: DataType.STRING(255) })
    fileType!: string;

    @Column({ type: DataType.DATE })
    uploadedAt!: Date;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => comment)
    commentsId?: number;

    @BelongsTo(() => comment)
    comments: comment;

    @HasMany(() => fileInfo)
    fileInfo: fileInfo[];
}
