import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { OneToMany, OneToOne } from '@mikro-orm/core';
import { User } from 'src/entity/User';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToMany(() => User, (user) => user.contacts)
    user: User;
}
