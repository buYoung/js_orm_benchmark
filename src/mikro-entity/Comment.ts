import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';
import { File } from './File';

@Entity()
export class Comment {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ length: 255 })
    comment!: string;

    @Property({ fieldName: 'createdAt', length: 0 })
    createdAt!: Date;

    @Property({ fieldName: 'updatedAt', length: 0, nullable: true })
    updatedAt?: Date;

    @Property({ fieldName: 'deletedAt', length: 0, nullable: true })
    deletedAt?: Date;

    @OneToMany(() => File, (file) => file.comments)
    files = new Collection<File>(this);

    @ManyToOne({
        entity: () => User,
        fieldName: 'userId',
        nullable: true,
        index: 'FK_c0354a9a009d3bb45a08655ce3b',
    })
    user?: User;
}
