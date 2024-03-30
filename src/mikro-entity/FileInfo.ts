import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { File } from 'src/mikro-entity/File';

@Entity()
export class FileInfo {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property()
    size!: number;

    @Property({ length: 255 })
    hash!: string;

    @Property({ length: 255 })
    path!: string;

    @ManyToOne({
        entity: () => File,
        fieldName: 'fileId',
        nullable: true,
        index: 'FK_3fa2a876560fa15272f02e59688',
    })
    file?: File;
}
