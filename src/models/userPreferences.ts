import {
    Model,
    Table,
    Column,
    DataType,
    Index,
    Sequelize,
    ForeignKey,
    HasOne,
} from 'sequelize-typescript';
import { user } from './user';

export interface userPreferencesAttributes {
    id?: number;
    language: string;
    theme: string;
    timezone: string;
}

@Table({ tableName: 'user_preferences', timestamps: false })
export class userPreferences
    extends Model<userPreferencesAttributes, userPreferencesAttributes>
    implements userPreferencesAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    language!: string;

    @Column({ type: DataType.STRING(255) })
    theme!: string;

    @Column({ type: DataType.STRING(255) })
    timezone!: string;

    @HasOne(() => user)
    user: user;
}
