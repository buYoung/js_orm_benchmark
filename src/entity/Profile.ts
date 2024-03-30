import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';
import { User } from 'src/entity/User';
import { OneToOne } from '@mikro-orm/core';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp')
    birthday: Date;

    @Column()
    gender: string;

    @OneToOne(() => User, (user) => user.profile)
    user: User;
}
