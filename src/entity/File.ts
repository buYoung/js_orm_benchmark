import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { OneToMany, OneToOne } from '@mikro-orm/core';
import { Comment } from 'src/entity/Comment';
import { FileInfo } from 'src/entity/FileInfo';

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    fileType: string;

    @Column('timestamp')
    uploadedAt: Date;

    @OneToMany(() => FileInfo, (fileInfo) => fileInfo.file)
    fileInfo: FileInfo[];

    @ManyToOne(() => Comment, (comment) => comment.file)
    comments: Comment;
}
