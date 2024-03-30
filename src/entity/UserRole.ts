import { Entity, PrimaryGeneratedColumn, Column, JoinTable } from 'typeorm';
import { OneToMany } from '@mikro-orm/core';
import { User } from 'src/entity/User';

@Entity()
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleName: string;

    @OneToMany(() => User, (user) => user.userRoles)
    users: User[];
}
