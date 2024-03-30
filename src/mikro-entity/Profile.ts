import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Profile {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ length: 0 })
    birthday!: Date;

    @Property({ length: 255 })
    gender!: string;
}
