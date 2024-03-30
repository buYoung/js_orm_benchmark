import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { OneToOne } from '@mikro-orm/core';
import { File } from 'src/entity/File';

@Entity()
export class FileInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: number;

    @Column()
    hash: string;

    @Column()
    path: string;

    @ManyToOne(() => File, (file) => file.fileInfo)
    file: File;
}
