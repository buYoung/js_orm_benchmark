import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { OneToMany, OneToOne } from '@mikro-orm/core';
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

    @OneToMany(() => User, (user) => user.comments)
    user: User;

    @OneToMany(() => File, (file) => file.comments)
    file: File[];
}
