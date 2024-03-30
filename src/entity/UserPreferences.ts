import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from 'src/entity/User';

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

    @OneToOne(() => User, (user) => user.userPreferences)
    user: User;
}
