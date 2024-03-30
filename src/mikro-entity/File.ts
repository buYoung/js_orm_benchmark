import { Collection, Entity, ManyToOne, PrimaryKey, Property, OneToMany } from '@mikro-orm/core';
import { Comment } from 'src/mikro-entity/Comment';
import { FileInfo } from 'src/mikro-entity/FileInfo';

@Entity()
export class File {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ fieldName: 'fileName', length: 255 })
    fileName!: string;

    @Property({ fieldName: 'fileType', length: 255 })
    fileType!: string;

    @Property({ fieldName: 'uploadedAt', length: 0 })
    uploadedAt!: Date;

    @OneToMany(() => FileInfo, (fileInfo) => fileInfo.file)
    fileInfos = new Collection<FileInfo>(this);

    @ManyToOne({
        entity: () => Comment,
        fieldName: 'commentsId',
        nullable: true,
        index: 'FK_79fc5a1619dfb4c00443db05ad7',
    })
    comments?: Comment;
}
