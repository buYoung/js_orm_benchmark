import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { OneToMany } from '@mikro-orm/core';
import { User } from 'src/entity/User';

@Entity()
export class UserLoginHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column('timestamp')
    lastLogin: Date;

    @OneToMany(() => User, (user) => user.userLoginHistory)
    user: User;
}
