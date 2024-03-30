import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/entity/User';
import { OneToMany, OneToOne } from '@mikro-orm/core';

@Entity()
export class UserPreferences {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    language: string;

    @Column()
    theme: string;

    @Column()
    timezone: string;

    @OneToMany(() => User, (user) => user.userPreferences)
    user: User;
}
