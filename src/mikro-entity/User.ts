import {
    Collection,
    Entity,
    ManyToMany, OneToMany,
    OneToOne,
    PrimaryKey,
    Property,
} from '@mikro-orm/core';
import { Profile } from './Profile';
import { UserPreferences } from './UserPreferences';
import { UserRole } from './UserRole';
import { Contact } from 'src/mikro-entity/Contact';
import { Project } from 'src/mikro-entity/Project';
import { UserLoginHistory } from 'src/mikro-entity/UserLoginHistory';
import { Comment } from 'src/mikro-entity/Comment';

@Entity()
export class User {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ fieldName: 'userId', length: 255 })
    userId!: string;

    @Property({ fieldName: 'userName', length: 255 })
    userName!: string;

    @Property()
    age!: number;

    @Property({ length: 255 })
    email!: string;

    @OneToOne({
        entity: () => Profile,
        fieldName: 'profileId',
        nullable: true,
        unique: 'REL_9466682df91534dd95e4dbaa61',
        owner: true,
    })
    profile?: Profile;

    @OneToOne({
        entity: () => UserPreferences,
        fieldName: 'userPreferencesId',
        nullable: true,
        unique: 'REL_c96c093190c5c2c1f94c53dabd',
        owner: true,
    })
    userPreferences?: UserPreferences;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts?: Collection<Contact>;

    @OneToMany(() => Project, (project) => project.user)
    projects?: Collection<Project>;

    @OneToMany(() => UserLoginHistory, (userLoginHistory) => userLoginHistory.user)
    userLoginHistory?: Collection<UserLoginHistory>;

    @OneToMany(() => Comment, (comment) => comment.user)
    comments?: Collection<Comment>;

    @ManyToMany({
        entity: () => UserRole,
        joinColumn: 'userId',
        inverseJoinColumn: 'userRoleId',
    })
    userRolesUserRole? : Collection<UserRole>;
}
