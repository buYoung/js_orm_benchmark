import { Collection, Entity, PrimaryKey, Property, ManyToMany } from '@mikro-orm/core';
import { User } from 'src/mikro-entity/User';

@Entity()
export class UserRole {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ fieldName: 'roleName', length: 255 })
    roleName!: string;

    @ManyToMany(() => User, (user) => user.userRolesUserRole)
    users = new Collection<User>(this);
}
