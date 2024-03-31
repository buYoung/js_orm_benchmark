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
import { user } from 'src/models/user';

export interface profileAttributes {
    id?: number;
    birthday: Date;
    gender: string;
}

@Table({ tableName: 'profile', timestamps: false })
export class profile
    extends Model<profileAttributes, profileAttributes>
    implements profileAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.DATE })
    birthday!: Date;

    @Column({ type: DataType.STRING(255) })
    gender!: string;

    @HasOne(() => user)
    user: user;
}
