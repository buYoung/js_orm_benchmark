import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { user } from 'src/models/user';
import { userLoginHistory } from 'src/models/userLoginHistory';
import { userPreferences } from 'src/models/userPreferences';
import { userRole } from 'src/models/userRole';
import { project } from 'src/models/project';
import { profile } from 'src/models/profile';
import { file } from 'src/models/file';
import { fileInfo } from 'src/models/fileInfo';
import { contact } from 'src/models/contact';
import { comment } from 'src/models/comment';

@Injectable()
export class SequelizeService {
    constructor(
        @InjectModel(user)
        private userRepository: typeof user,
        @InjectModel(userLoginHistory)
        private userLoginHistoryRepository: typeof userLoginHistory,
        @InjectModel(userPreferences)
        private userPreferencesRepository: typeof userPreferences,
        @InjectModel(userRole)
        private userRoleRepository: typeof userRole,
        @InjectModel(project)
        private projectRepository: typeof project,
        @InjectModel(profile)
        private profileRepository: typeof profile,
        @InjectModel(file)
        private fileRepository: typeof file,
        @InjectModel(fileInfo)
        private fileInfoRepository: typeof fileInfo,
        @InjectModel(contact)
        private contactRepository: typeof contact,
        @InjectModel(comment)
        private commentRepository: typeof comment,
    ) {}

    async findAllGetMany() {
        return this.userRepository.findAll({
            include: [
                {
                    model: profile,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userPreferences,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userRole,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: contact,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: project,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userLoginHistory,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: comment,
                    required: false,
                    attributes: ['id'],
                    include: [
                        {
                            model: file,
                            required: false,
                            attributes: ['id'],
                            include: [
                                {
                                    model: fileInfo,
                                    attributes: ['id'],
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
            ],
            attributes: ['id'],
        });
    }

    async findAllGetManyAndCount() {
        return this.userRepository.findAndCountAll({
            include: [
                {
                    model: profile,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userPreferences,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userRole,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: contact,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: project,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userLoginHistory,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: comment,
                    required: false,
                    attributes: ['id'],
                    include: [
                        {
                            model: file,
                            required: false,
                            attributes: ['id'],
                            include: [
                                {
                                    model: fileInfo,
                                    attributes: ['id'],
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
            ],
            attributes: ['id'],
        });
    }

    async findAllGetManyPaginate() {
        return this.userRepository.findAll({
            include: [
                {
                    model: profile,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userPreferences,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userRole,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: contact,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: project,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userLoginHistory,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: comment,
                    required: false,
                    attributes: ['id'],
                    include: [
                        {
                            model: file,
                            required: false,
                            attributes: ['id'],
                            include: [
                                {
                                    model: fileInfo,
                                    attributes: ['id'],
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
            ],
            attributes: ['id'],
            limit: 100,
        });
    }

    async findAllGetManyAndCountPaginate() {
        return this.userRepository.findAndCountAll({
            include: [
                {
                    model: profile,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userPreferences,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userRole,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: contact,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: project,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: userLoginHistory,
                    required: false,
                    attributes: ['id'],
                },
                {
                    model: comment,
                    required: false,
                    attributes: ['id'],
                    include: [
                        {
                            model: file,
                            required: false,
                            attributes: ['id'],
                            include: [
                                {
                                    model: fileInfo,
                                    attributes: ['id'],
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
            ],
            attributes: ['id'],
            limit: 100,
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async create() {
        // const loopCount = 1000;
        // const queryRunner = this.connection.createQueryRunner();
        // await queryRunner.connect();
        // await queryRunner.startTransaction();
        //
        // console.time('create');
        // for (let i = 0; i < loopCount; i++) {
        //     const profile = this.profileRepository.create({
        //         birthday: dayjs(faker.date.birthdate().getUTCDate()).toDate(),
        //         gender: faker.person.gender(),
        //     });
        //
        //     const userPreferences = this.userPreferencesRepository.create({
        //         language: faker.person.jobArea(),
        //         theme: faker.internet.color(),
        //         timezone: faker.location.timeZone(),
        //     });
        //
        //     const userRole = this.userRoleRepository.create({
        //         roleName: faker.person.jobType(),
        //     });
        //
        //     const contacts = Array.from({ length: 5 }, () => {
        //         return this.contactRepository.create({
        //             phone: faker.phone.number(),
        //             address: faker.location.streetAddress(),
        //         });
        //     });
        //
        //     const projects = Array.from({ length: 10 }, () => {
        //         return this.projectRepository.create({
        //             projectName: faker.company.name(),
        //             projectDescription: faker.company.catchPhrase(),
        //             projectStartDate: dayjs(
        //                 faker.date.anytime().getUTCDate(),
        //             ).toDate(),
        //             projectEndDate: dayjs(
        //                 faker.date.future().getUTCDate(),
        //             ).toDate(),
        //         });
        //     });
        //
        //     const loginHistory = Array.from({ length: 5 }, () => {
        //         return this.userLoginHistoryRepository.create({
        //             firstName: faker.person.firstName(),
        //             lastName: faker.person.lastName(),
        //             age: faker.number.int(100),
        //             email: faker.internet.email(),
        //             lastLogin: dayjs(
        //                 faker.date.anytime().getUTCDate(),
        //             ).toDate(),
        //         });
        //     });
        //
        //     const fileInfo = this.fileInfoRepository.create({
        //         size: faker.number.int({
        //             min: 65535,
        //             max: 5211451,
        //         }),
        //         hash: faker.git.commitMessage(),
        //         path: faker.system.filePath(),
        //     });
        //
        //     const file = this.fileRepository.create({
        //         fileName: faker.system.fileName(),
        //         fileType: faker.system.fileType(),
        //         uploadedAt: dayjs(faker.date.anytime().getUTCDate()).toDate(),
        //     });
        //
        //     const comment = Array.from({ length: 15 }, () => {
        //         return this.commentRepository.create({
        //             comment: faker.lorem.sentence(),
        //             createdAt: dayjs(
        //                 faker.date.anytime().getUTCDate(),
        //             ).toDate(),
        //             updatedAt: dayjs(
        //                 faker.date.anytime().getUTCDate(),
        //             ).toDate(),
        //         });
        //     });
        //
        //     const User = this.userRepository.create({
        //         userId: faker.internet.email(),
        //         userName: faker.person.fullName(),
        //         age: faker.number.int(100),
        //         email: faker.internet.email(),
        //     });
        //
        //     await Promise.all([
        //         queryRunner.manager.save(profile),
        //         queryRunner.manager.save(userPreferences),
        //     ]);
        //
        //     User.profile = profile;
        //     User.userPreferences = userPreferences;
        //
        //     await queryRunner.manager.save(User);
        //
        //     userRole.users = [User];
        //     contacts.some((c) => {
        //         c.user = User;
        //     });
        //     projects.some((p) => {
        //         p.user = User;
        //     });
        //     loginHistory.some((l) => {
        //         l.user = User;
        //     });
        //     comment.some((c) => {
        //         c.user = User;
        //     });
        //
        //     await Promise.all([
        //         queryRunner.manager.save(userRole),
        //         queryRunner.manager.save(contacts),
        //         queryRunner.manager.save(projects),
        //         queryRunner.manager.save(loginHistory),
        //     ]);
        //
        //     for (const c of comment) {
        //         await queryRunner.manager.save(c);
        //         file.comments = c;
        //         await queryRunner.manager.save(file);
        //         await queryRunner.manager.save(fileInfo);
        //         fileInfo.file = file;
        //     }
        // }
        // console.timeEnd('create');
        // await queryRunner.commitTransaction();
        // await queryRunner.release();
        // return `This action create a user`;
    }
}
