import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import dayjs from 'dayjs';

import { User } from 'src/entity/User';
import { UserLoginHistory } from 'src/entity/UserLoginHistory';
import { UserPreferences } from 'src/entity/UserPreferences';
import { UserRole } from 'src/entity/UserRole';
import { Project } from 'src/entity/Project';
import { Profile } from 'src/entity/Profile';
import { File } from 'src/entity/File';
import { FileInfo } from 'src/entity/FileInfo';
import { Contact } from 'src/entity/Contact';
import { Comment } from 'src/entity/Comment';
import { DataSource } from 'typeorm/data-source/DataSource';
import { faker } from '@faker-js/faker';

@Injectable()
export class TypeORMService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(UserLoginHistory)
        private userLoginHistoryRepository: Repository<UserLoginHistory>,
        @InjectRepository(UserPreferences)
        private userPreferencesRepository: Repository<UserPreferences>,
        @InjectRepository(UserRole)
        private userRoleRepository: Repository<UserRole>,
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,
        @InjectRepository(File)
        private fileRepository: Repository<File>,
        @InjectRepository(FileInfo)
        private fileInfoRepository: Repository<FileInfo>,
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
        private connection: DataSource,
    ) {}

    async findAllGetMany() {
        return this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRoles', 'userRoles')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .select([
                'user.id',
                'profile.id',
                'userPreferences.id',
                'userRoles.id',
                'contacts.id',
                'projects.id',
                'userLoginHistory.id',
                'comments.id',
                'file.id',
                'fileInfo.id',
            ])
            .getMany();
    }

    async findAllGetManyAndCount() {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRoles', 'userRoles')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .select([
                'user.id',
                'profile.id',
                'userPreferences.id',
                'userRoles.id',
                'contacts.id',
                'projects.id',
                'userLoginHistory.id',
                'comments.id',
                'file.id',
                'fileInfo.id',
            ])
            .getManyAndCount();
    }

    async findAllGetManyPaginate() {
        const qb =  this.userRepository
            .createQueryBuilder('user')
            .setFindOptions({
                relationLoadStrategy: 'query',
            });
        return qb
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRoles', 'userRoles')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .select([
                'user.id',
                'profile.id',
                'userPreferences.id',
                'userRoles.id',
                'contacts.id',
                'projects.id',
                'userLoginHistory.id',
                'comments.id',
                'file.id',
                'fileInfo.id',
            ])
            .skip(0)
            .take(100)
            .getMany();
    }

    async findAllGetManyAndCountPaginate() {
        // this.userRepository
        //             .createQueryBuilder('user')
        //             .leftJoinAndSelect('user.profile', 'profile')
        //             .leftJoinAndSelect('user.userPreferences', 'userPreferences')
        //             .leftJoinAndSelect('user.userRoles', 'userRoles')
        //             .leftJoinAndSelect('user.contacts', 'contacts')
        //             .leftJoinAndSelect('user.projects', 'projects')
        //             .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
        //             .leftJoinAndSelect('user.comments', 'comments')
        //             .leftJoinAndSelect('comments.file', 'file')
        //             .leftJoinAndSelect('file.fileInfo', 'fileInfo')
        //             .select([
        //                 'user.id',
        //                 'profile.id',
        //                 'userPreferences.id',
        //                 'userRoles.id',
        //                 'contacts.id',
        //                 'projects.id',
        //                 'userLoginHistory.id',
        //                 'comments.id',
        //                 'file.id',
        //                 'fileInfo.id',
        //             ])
        //             .skip(0)
        //             .take(100)
        //             .getManyAndCount();
        return this.userRepository.findAndCount({
            relations: {
                profile: true,
                userPreferences: true,
                userRoles: true,
                contacts: true,
                projects: true,
                userLoginHistory: true,
                comments: {
                    file: {
                        fileInfo: true,
                    },
                }
            },
            select: {
                id: true,
                profile: {
                    id: true,
                },
                userPreferences: {
                    id: true,
                },
                userRoles: {
                    id: true,
                },
                contacts: {
                    id: true,
                },
                projects: {
                    id: true,
                },
                userLoginHistory: {
                    id: true,
                },
                comments: {
                    id: true,
                    file: {
                        id: true,
                        fileInfo: {
                            id: true,
                        },
                    },
                },
            },
            skip: 0,
            take: 100,
            relationLoadStrategy: 'query',
            where: {
                id: In(Array.from({ length: 1000 }, (_, i) => 1993 + i + 1)),
            }
        })
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async create() {
        const loopCount = 1000;
        const queryRunner = this.connection.createQueryRunner()
        await queryRunner.connect();
        await queryRunner.startTransaction();


        console.time('create');
        for (let i = 0; i < loopCount; i++) {
            const profile = this.profileRepository.create({
                birthday: dayjs(faker.date.birthdate().getUTCDate()).toDate(),
                gender: faker.person.gender(),
            });

            const userPreferences = this.userPreferencesRepository.create({
                language: faker.person.jobArea(),
                theme: faker.internet.color(),
                timezone: faker.location.timeZone(),
            });

            const userRole = this.userRoleRepository.create({
                roleName: faker.person.jobType(),
            });

            const contacts = Array.from(
                { length: 5 },
                () => {
                    return this.contactRepository.create({
                        phone: faker.phone.number(),
                        address: faker.location.streetAddress(),
                    });
                },
            );

            const projects = Array.from(
                { length: 10 },
                () => {
                    return this.projectRepository.create({
                        projectName: faker.company.name(),
                        projectDescription: faker.company.catchPhrase(),
                        projectStartDate: dayjs(
                            faker.date.anytime().getUTCDate(),
                        ).toDate(),
                        projectEndDate: dayjs(
                            faker.date.future().getUTCDate(),
                        ).toDate(),
                    });
                },
            );

            const loginHistory = Array.from(
                { length: 5 },
                () => {
                    return this.userLoginHistoryRepository.create({
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        age: faker.number.int(100),
                        email: faker.internet.email(),
                        lastLogin: dayjs(
                            faker.date.anytime().getUTCDate(),
                        ).toDate(),
                    });
                },
            );

            const fileInfo = this.fileInfoRepository.create({
                size: faker.number.int({
                    min: 65535,
                    max: 5211451,
                }),
                hash: faker.git.commitMessage(),
                path: faker.system.filePath(),
            });

            const file = this.fileRepository.create({
                fileName: faker.system.fileName(),
                fileType: faker.system.fileType(),
                uploadedAt: dayjs(faker.date.anytime().getUTCDate()).toDate(),
            });

            const comment = Array.from(
                { length: 15 },
                () => {
                    return this.commentRepository.create({
                        comment: faker.lorem.sentence(),
                        createdAt: dayjs(
                            faker.date.anytime().getUTCDate(),
                        ).toDate(),
                        updatedAt: dayjs(
                            faker.date.anytime().getUTCDate(),
                        ).toDate(),
                    });
                },
            );

            const User = this.userRepository.create({
                userId: faker.internet.email(),
                userName: faker.person.fullName(),
                age: faker.number.int(100),
                email: faker.internet.email(),
            });

            await Promise.all([
                queryRunner.manager.save(profile),
                queryRunner.manager.save(userPreferences),
            ]);

            User.profile = profile;
            User.userPreferences = userPreferences;

            await queryRunner.manager.save(User);

            userRole.users = [User];
            contacts.some((c) => {
                c.user = User;
            });
            projects.some((p) => {
                p.user = User;
            });
            loginHistory.some((l) => {
                l.user = User;
            });
            comment.some((c) => {
                c.user = User;
            });

            await Promise.all([
                queryRunner.manager.save(userRole),
                queryRunner.manager.save(contacts),
                queryRunner.manager.save(projects),
                queryRunner.manager.save(loginHistory),
            ]);

            for (const c of comment) {
                await queryRunner.manager.save(c);
                file.comments = c;
                await queryRunner.manager.save(file);
                await queryRunner.manager.save(fileInfo);
                fileInfo.file = file;
            }
        }
        console.timeEnd('create');
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return `This action create a user`;
    }
}
