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

export interface contactAttributes {
    id?: number;
    phone: string;
    address: string;
    userId?: number;
}

@Table({ tableName: 'contact', timestamps: false })
export class contact
    extends Model<contactAttributes, contactAttributes>
    implements contactAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    phone!: string;

    @Column({ type: DataType.STRING(255) })
    address!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => user)
    userId?: number;

    @BelongsTo(() => user)
    user: user;
}
