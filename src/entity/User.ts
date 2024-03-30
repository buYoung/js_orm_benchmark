import {
    Column, Entity, Index, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, ManyToMany, OneToMany, OneToOne
} from 'typeorm';
import { Profile } from 'src/entity/Profile';
import { Contact } from 'src/entity/Contact';
import { UserLoginHistory } from 'src/entity/UserLoginHistory';
import { UserRole } from 'src/entity/UserRole';
import { UserPreferences } from 'src/entity/UserPreferences';
import { Project } from 'src/entity/Project';
import { Comment } from 'src/entity/Comment';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    userName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @OneToOne(() => Profile, (profile) => profile.user)
    @JoinColumn()
    profile: Profile;

    @OneToOne(() => UserPreferences, (userPreferences) => userPreferences.user)
    @JoinColumn()
    userPreferences: UserPreferences;

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[];

    @OneToMany(
        () => UserLoginHistory,
        (userLoginHistory) => userLoginHistory.user,
    )
    userLoginHistory: UserLoginHistory[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];

    @ManyToMany(() => UserRole, (userRole) => userRole.users)
    @JoinTable()
    userRoles: UserRole[];
}
