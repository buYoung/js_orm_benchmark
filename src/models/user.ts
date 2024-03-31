import {
    Model,
    Table,
    Column,
    DataType,
    Index,
    Sequelize,
    ForeignKey,
    BelongsTo,
    HasMany,
    BelongsToMany,
} from 'sequelize-typescript';
import { profile } from './profile';
import { userPreferences } from './userPreferences';
import { project } from './project';
import { contact } from './contact';
import { userLoginHistory } from './userLoginHistory';
import { comment } from './comment';
import { userUserRolesUserRole } from './userUserRolesUserRole';
import { userRole } from './userRole';

export interface userAttributes {
    id?: number;
    userId: string;
    userName: string;
    age: number;
    email: string;
    profileId?: number;
    userPreferencesId?: number;
}

@Table({ tableName: 'user', timestamps: false })
export class user
    extends Model<userAttributes, userAttributes>
    implements userAttributes
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number;

    @Column({ type: DataType.STRING(255) })
    userId!: string;

    @Column({ type: DataType.STRING(255) })
    userName!: string;

    @Column({ type: DataType.INTEGER })
    age!: number;

    @Column({ type: DataType.STRING(255) })
    email!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => profile)
    profileId?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    @ForeignKey(() => userPreferences)
    userPreferencesId?: number;

    @BelongsTo(() => profile)
    profile: profile;

    @BelongsTo(() => userPreferences)
    userPreferences: userPreferences;

    @HasMany(() => project)
    project: project[];

    @HasMany(() => contact)
    contact: contact[];

    @HasMany(() => userLoginHistory)
    userLoginHistory: userLoginHistory[];

    @HasMany(() => comment)
    comment: comment[];

    @BelongsToMany(() => userRole, () => userUserRolesUserRole, 'userId', 'userRoleId')
    userRoles: userRole[];
}
