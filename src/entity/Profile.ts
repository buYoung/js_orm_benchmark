import {
    Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne
} from 'typeorm';
import { User } from 'src/entity/User';

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
