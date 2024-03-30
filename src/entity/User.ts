import {
    Column,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from 'src/entity/Profile';
import { Cascade, ManyToMany, OneToMany, OneToOne } from '@mikro-orm/core';
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
    profile: Profile;

    @ManyToOne(() => UserPreferences, (userPreferences) => userPreferences.user)
    userPreferences: UserPreferences[];

    @ManyToOne(() => Project, (project) => project.user)
    projects: Project[];

    @ManyToOne(() => Contact, (contact) => contact.user)
    contacts: Contact[];

    @ManyToOne(
        () => UserLoginHistory,
        (userLoginHistory) => userLoginHistory.user,
    )
    userLoginHistory: UserLoginHistory[];

    @ManyToOne(() => Comment, (comment) => comment.user)
    comments: Comment[];

    @ManyToOne(() => UserRole, (userRole) => userRole.users)
    userRoles: UserRole;
}
