import {
    Model,
    Table,
    Column,
    DataType,
    Index,
    Sequelize,
    ForeignKey,
    BelongsToMany,
} from 'sequelize-typescript';
import { userUserRolesUserRole } from './userUserRolesUserRole';
import { user } from './user';

export interface userRoleAttributes {
    id?: number;
    roleName: string;
}

@Table({ tableName: 'user_role', timestamps: false })
export class userRole
    extends Model<userRoleAttributes, userRoleAttributes>
    implements userRoleAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    roleName!: string;

    @BelongsToMany(() => user, () => userUserRolesUserRole, 'userRoleId', 'userId')
    users: user[];
}
