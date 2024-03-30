import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from 'typeorm';
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
