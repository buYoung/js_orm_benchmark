import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class UserLoginHistory {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ fieldName: 'firstName', length: 255 })
    firstName!: string;

    @Property({ fieldName: 'lastName', length: 255 })
    lastName!: string;

    @Property()
    age!: number;

    @Property({ length: 255 })
    email!: string;

    @Property({ fieldName: 'lastLogin', length: 0 })
    lastLogin!: Date;

    @ManyToOne({
        entity: () => User,
        fieldName: 'userId',
        nullable: true,
        index: 'FK_8cd045e34dacf6e82ac34e783b5',
    })
    user?: User;
}
