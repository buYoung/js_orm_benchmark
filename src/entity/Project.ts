import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/entity/User';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    projectName: string;

    @Column()
    projectDescription: string;

    @Column('timestamp')
    projectStartDate: Date;

    @Column('timestamp')
    projectEndDate: Date;

    @ManyToOne(() => User, (user) => user.projects)
    user: User;
}
