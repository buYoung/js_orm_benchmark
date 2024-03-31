import {
    Model,
    Table,
    Column,
    DataType,
    Index,
    Sequelize,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { user } from './user';

export interface userLoginHistoryAttributes {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    lastLogin: Date;
    userId?: number;
}

@Table({ tableName: 'user_login_history', timestamps: false })
export class userLoginHistory
    extends Model<userLoginHistoryAttributes, userLoginHistoryAttributes>
    implements userLoginHistoryAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    firstName!: string;

    @Column({ type: DataType.STRING(255) })
    lastName!: string;

    @Column({ type: DataType.INTEGER })
    age!: number;

    @Column({ type: DataType.STRING(255) })
    email!: string;

    @Column({ type: DataType.DATE })
    lastLogin!: Date;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => user)
    userId?: number;

    @BelongsTo(() => user)
    user: user;
}
