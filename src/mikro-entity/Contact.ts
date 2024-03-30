import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class Contact {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ length: 255 })
    phone!: string;

    @Property({ length: 255 })
    address!: string;

    @ManyToOne({
        entity: () => User,
        fieldName: 'userId',
        nullable: true,
        index: 'FK_e7e34fa8e409e9146f4729fd0cb',
    })
    user?: User;
}
