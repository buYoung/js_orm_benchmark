import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from 'src/entity/User';

@Entity()
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleName: string;

    @ManyToMany(() => User, (user) => user.userRoles)
    users: User[];
}
