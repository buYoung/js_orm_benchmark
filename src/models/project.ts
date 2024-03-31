import {
    Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { user } from './user';

export interface projectAttributes {
    id?: number;
    projectName: string;
    projectDescription: string;
    projectStartDate: Date;
    projectEndDate: Date;
    userId?: number;
}

@Table({ tableName: 'project', timestamps: false })
export class project
    extends Model<projectAttributes, projectAttributes>
    implements projectAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    projectName!: string;

    @Column({ type: DataType.STRING(255) })
    projectDescription!: string;

    @Column({ type: DataType.DATE })
    projectStartDate!: Date;

    @Column({ type: DataType.DATE })
    projectEndDate!: Date;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => user)
    userId?: number;

    @BelongsTo(() => user)
    user: user;
}
