import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { faker } from '@faker-js/faker';
import { User } from 'src/mikro-entity/User';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { UserLoginHistory } from 'src/mikro-entity/UserLoginHistory';
import { UserPreferences } from 'src/mikro-entity/UserPreferences';
import { UserRole } from 'src/mikro-entity/UserRole';
import { Project } from 'src/mikro-entity/Project';
import { Profile } from 'src/mikro-entity/Profile';
import { File } from 'src/mikro-entity/File';
import { FileInfo } from 'src/mikro-entity/FileInfo';
import { Contact } from 'src/mikro-entity/Contact';
import { Comment } from 'src/mikro-entity/Comment';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class MikroOrmService {
    constructor(
        @InjectRepository(User)
        private userRepository: EntityRepository<User>,
        @InjectRepository(UserLoginHistory)
        private userLoginHistoryRepository: EntityRepository<UserLoginHistory>,
        @InjectRepository(UserPreferences)
        private userPreferencesRepository: EntityRepository<UserPreferences>,
        @InjectRepository(UserRole)
        private userRoleRepository: EntityRepository<UserRole>,
        @InjectRepository(Project)
        private projectRepository: EntityRepository<Project>,
        @InjectRepository(Profile)
        private profileRepository: EntityRepository<Profile>,
        @InjectRepository(File)
        private fileRepository: EntityRepository<File>,
        @InjectRepository(FileInfo)
        private fileInfoRepository: EntityRepository<FileInfo>,
        @InjectRepository(Contact)
        private contactRepository: EntityRepository<Contact>,
        @InjectRepository(Comment)
        private commentRepository: EntityRepository<Comment>,
        private readonly em: EntityManager,
    ) {}

    async findAllGetMany() {
        return this.userRepository.findAll({
            populate: [
                'profile',
                'userPreferences',
                'userRolesUserRole',
                'contacts',
                'projects',
                'userLoginHistory',
                'comments',
                'comments.files',
                'comments.files.fileInfos',
            ],
            fields: [
                'id',
                'userPreferences.id',
                'userRolesUserRole.id',
                'contacts.id',
                'projects.id',
                'userLoginHistory.id',
                'comments.id',
                'comments.files.id',
                'comments.files.fileInfos.id',
            ],
        });
    }

    async findAllGetManyAndCount() {
        return this.userRepository.findAndCount(null, {
            populate: [
                'profile',
                'userPreferences',
                'userRolesUserRole',
                'contacts',
                'projects',
                'userLoginHistory',
                'comments',
                'comments.files',
                'comments.files.fileInfos',
            ],
            fields: [
                'id',
                'userPreferences.id',
                'userRolesUserRole.id',
                'contacts.id',
                'projects.id',
                'userLoginHistory.id',
                'comments.id',
                'comments.files.id',
                'comments.files.fileInfos.id',
            ],
        });
    }

    async findAllGetManyPaginate() {
        return this.userRepository.findAll({
            populate: [
                'profile',
                'userPreferences',
                'userRolesUserRole',
                'contacts',
                'projects',
                'userLoginHistory',
                'comments',
                'comments.files',
                'comments.files.fileInfos',
            ],
            fields: [
                'id',
                'userPreferences.id',
                'userRolesUserRole.id',
                'contacts.id',
                'projects.id',
                'userLoginHistory.id',
                'comments.id',
                'comments.files.id',
                'comments.files.fileInfos.id',
            ],
            limit: 100,
            offset: 0,
        });
    }

    async findAllGetManyAndCountPaginate() {
        return this.userRepository.findAndCount(
            {
                id: { $gt: 250 },
            },
            {
                populateWhere: {
                    projects: { $gt: 250 },
                },
                populate: [
                    'profile',
                    'userPreferences',
                    'userRolesUserRole',
                    'contacts',
                    'userLoginHistory',
                    'comments',
                    'comments.files',
                    'comments.files.fileInfos',
                ],
                fields: [
                    'id',
                    'userPreferences.id',
                    'userRolesUserRole.id',
                    'contacts.id',
                    'projects.id',
                    'userLoginHistory.id',
                    'comments.id',
                    'comments.files.id',
                    'comments.files.fileInfos.id',
                ],
                limit: 100,
                offset: 250,
            },
        );
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async create() {
        const loopCount = 1000;
        const em = this.em.fork();
        await em.begin();

        console.time('create');
        for (let i = 0; i < loopCount; i++) {
            const profile = new Profile();
            profile.birthday = dayjs(
                faker.date.birthdate().getUTCDate(),
            ).toDate();
            profile.gender = faker.person.gender();

            const userPreferences = new UserPreferences();
            userPreferences.language = faker.person.jobArea();
            userPreferences.theme = faker.internet.color();
            userPreferences.timezone = faker.location.timeZone();

            const userRole = new UserRole();
            userRole.roleName = faker.person.jobType();

            const contacts = Array.from({ length: 5 }, () => {
                const contact = new Contact();
                contact.phone = faker.phone.number();
                contact.address = faker.location.streetAddress();
                return contact;
            });

            const projects = Array.from({ length: 10 }, () => {
                const project = new Project();
                project.projectName = faker.company.name();
                project.projectDescription = faker.company.catchPhrase();
                project.projectStartDate = dayjs(
                    faker.date.anytime().getUTCDate(),
                ).toDate();
                project.projectEndDate = dayjs(
                    faker.date.future().getUTCDate(),
                ).toDate();
                return project;
            });

            const loginHistory = Array.from({ length: 5 }, () => {
                const loginHistory = new UserLoginHistory();
                loginHistory.firstName = faker.person.firstName();
                loginHistory.lastName = faker.person.lastName();
                loginHistory.age = faker.number.int(100);
                loginHistory.email = faker.internet.email();
                loginHistory.lastLogin = dayjs(
                    faker.date.anytime().getUTCDate(),
                ).toDate();
                return loginHistory;
            });

            const fileInfo = new FileInfo();
            fileInfo.size = faker.number.int({
                min: 65535,
                max: 5211451,
            });
            fileInfo.hash = faker.git.commitMessage();
            fileInfo.path = faker.system.filePath();

            const file = new File();
            file.fileName = faker.system.fileName();
            file.fileType = faker.system.fileType();
            file.uploadedAt = dayjs(faker.date.anytime().getUTCDate()).toDate();

            const comment = Array.from({ length: 15 }, () => {
                const comment = new Comment();
                comment.comment = faker.lorem.sentence();
                comment.createdAt = dayjs(
                    faker.date.anytime().getUTCDate(),
                ).toDate();
                comment.updatedAt = dayjs(
                    faker.date.anytime().getUTCDate(),
                ).toDate();
                return comment;
            });

            const user = new User();
            user.userId = faker.internet.email();
            user.userName = faker.person.fullName();
            user.age = faker.number.int(100);
            user.email = faker.internet.email();

            await Promise.all([
                em.persist(profile),
                em.persist(userPreferences),
            ]);

            user.profile = profile;

            user.userPreferences = userPreferences;

            em.persist(user);
            userRole.users.add(user);

            contacts.some((c) => {
                c.user = user;
            });
            projects.some((p) => {
                p.user = user;
            });
            loginHistory.some((l) => {
                l.user = user;
            });
            comment.some((c) => {
                c.user = user;
            });

            await Promise.all([
                em.persist(userRole),
                em.persist(contacts),
                em.persist(projects),
                em.persist(loginHistory),
            ]);

            for (const c of comment) {
                em.persist(c);
                file.comments = c;

                em.persist(file);
                fileInfo.file = file;
                em.persist(fileInfo);
            }
        }
        console.timeEnd('create');
        await em.commit();
        return `This action create a user`;
    }
}
