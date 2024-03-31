import {
    Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { file } from './file';
import { comment } from 'src/models/comment';

export interface fileInfoAttributes {
    id?: number;
    size: number;
    hash: string;
    path: string;
    fileId?: number;
}

@Table({ tableName: 'file_info', timestamps: false })
export class fileInfo
    extends Model<fileInfoAttributes, fileInfoAttributes>
    implements fileInfoAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.INTEGER })
    size!: number;

    @Column({ type: DataType.STRING(255) })
    hash!: string;

    @Column({ type: DataType.STRING(255) })
    path!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => file)
    fileId?: number;

    @BelongsTo(() => file)
    file: file;
}
