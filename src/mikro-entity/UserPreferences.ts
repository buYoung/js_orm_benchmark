import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class UserPreferences {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ length: 255 })
    language!: string;

    @Property({ length: 255 })
    theme!: string;

    @Property({ length: 255 })
    timezone!: string;
}
