import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { User } from 'src/entity/User';
import { File } from 'src/entity/File';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column('timestamp')
    createdAt: Date;

    @Column('timestamp', { nullable: true })
    updatedAt?: Date | null;

    @Column('timestamp', { nullable: true })
    deletedAt?: Date | null;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;

    @OneToMany(() => File, (file) => file.comments)
    file: File[];
}
