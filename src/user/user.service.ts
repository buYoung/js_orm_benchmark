import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
export class UserService {
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
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRole', 'userRole')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .getMany();
    }

    async findAllGetManyAndCount() {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRole', 'userRole')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .getManyAndCount();
    }

    async findAllGetManyPaginate() {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRole', 'userRole')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .skip(0)
            .take(1000)
            .getMany();
    }

    async findAllGetManyAndCountPaginate() {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.userPreferences', 'userPreferences')
            .leftJoinAndSelect('user.userRole', 'userRole')
            .leftJoinAndSelect('user.contacts', 'contacts')
            .leftJoinAndSelect('user.projects', 'projects')
            .leftJoinAndSelect('user.userLoginHistory', 'userLoginHistory')
            .leftJoinAndSelect('user.comments', 'comments')
            .leftJoinAndSelect('comments.file', 'file')
            .leftJoinAndSelect('file.fileInfo', 'fileInfo')
            .skip(0)
            .take(1000)
            .getManyAndCount();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async create() {
        const loopCount = 5;

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
                { length: faker.number.int({ min: 1, max: 50 }) },
                () => {
                    return this.contactRepository.create({
                        phone: faker.phone.number(),
                        address: faker.location.streetAddress(),
                    });
                },
            );

            const projects = Array.from(
                { length: faker.number.int({ min: 5, max: 20 }) },
                () => {
                    return this.projectRepository.create({
                        projectName: faker.company.name(),
                        projectDescription: faker.company.catchPhrase(),
                        projectStartDate: dayjs(
                            faker.date.past().getUTCDate(),
                        ).toDate(),
                        projectEndDate: dayjs(
                            faker.date.future().getUTCDate(),
                        ).toDate(),
                    });
                },
            );

            const loginHistory = Array.from(
                { length: faker.number.int({ min: 1, max: 100 }) },
                () => {
                    return this.userLoginHistoryRepository.create({
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        age: faker.number.int(100),
                        email: faker.internet.email(),
                        lastLogin: dayjs(
                            faker.date.past().getUTCDate(),
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
                uploadedAt: dayjs(faker.date.past().getUTCDate()).toDate(),
            });

            const comment = Array.from(
                { length: faker.number.int({ min: 1, max: 100 }) },
                () => {
                    return this.commentRepository.create({
                        comment: faker.lorem.sentence(),
                        createdAt: dayjs(
                            faker.date.past().getUTCDate(),
                        ).toDate(),
                        updatedAt: dayjs(
                            faker.date.past().getUTCDate(),
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
                this.profileRepository.save(profile),
                this.userPreferencesRepository.save(userPreferences),
                this.userRoleRepository.save(userRole),
                this.contactRepository.save(contacts),
                this.projectRepository.save(projects),
                this.userLoginHistoryRepository.save(loginHistory),
            ]);

            console.log('fileInfo', fileInfo);

            for (const c of comment) {
                await this.commentRepository.save(c);
                file.comments = c;
                await this.fileRepository.save(file);
                await this.fileInfoRepository.save(fileInfo);
                fileInfo.file = file;
            }

            User.profile = profile;
            User.userPreferences = [userPreferences];
            User.userRoles = userRole;
            User.contacts = contacts;
            User.projects = projects;
            User.userLoginHistory = loginHistory;
            User.comments = comment;

            await this.userRepository.save(User);
        }
        console.timeEnd('create');
        return `This action create a user`;
    }
}
