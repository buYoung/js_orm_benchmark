import {
    Model, Table, ForeignKey, Column,
} from 'sequelize-typescript';
import { user } from './user';
import { userRole } from './userRole';

export interface userUserRolesUserRoleAttributes {
    userId: number;
    userRoleId: number;
}

@Table({ tableName: 'user_user_roles_user_role', timestamps: false })
export class userUserRolesUserRole
    extends Model<
        userUserRolesUserRoleAttributes,
        userUserRolesUserRoleAttributes
    >
    implements userUserRolesUserRoleAttributes
{
    @ForeignKey(() => user)
    @Column
    userId!: number;

    @ForeignKey(() => userRole)
    @Column
    userRoleId!: number;
}
