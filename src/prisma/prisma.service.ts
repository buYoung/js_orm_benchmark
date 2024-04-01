import { Injectable } from '@nestjs/common';
import { PrismaService as _PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class PrismaService {
    constructor(private prisma: _PrismaService) {}

    async findAllGetMany() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                profile: {
                    select: {
                        id: true,
                    },
                },
                user_preferences: {
                    select: {
                        id: true,
                    },
                },
                user_user_roles_user_role: {
                    select: {
                        userId: true,
                    },
                },
                contact: {
                    select: {
                        id: true,
                    },
                },
                project: {
                    select: {
                        id: true,
                    },
                },
                user_login_history: {
                    select: {
                        id: true,
                    },
                },
                comment: {
                    select: {
                        id: true,
                        file: {
                            select: {
                                id: true,
                                file_info: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }

    async findAllGetManyAndCount() {
        const query = this.prisma.user.findMany({
            select: {
                id: true,
                profile: {
                    select: {
                        id: true,
                    },
                },
                user_preferences: {
                    select: {
                        id: true,
                    },
                },
                user_user_roles_user_role: {
                    select: {
                        userId: true,
                    },
                },
                contact: {
                    select: {
                        id: true,
                    },
                },
                project: {
                    select: {
                        id: true,
                    },
                },
                user_login_history: {
                    select: {
                        id: true,
                    },
                },
                comment: {
                    select: {
                        id: true,
                        file: {
                            select: {
                                id: true,
                                file_info: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        const count = this.prisma.user
            .count({
                select: {
                    _all: true,
                },
            })
            .then((res) => {
                return {
                    count: res._all,
                };
            });
        return Promise.all([query, count]);
    }

    async findAllGetManyPaginate() {
        return this.prisma.user.findMany({
            skip: 0,
            take: 100,
            select: {
                id: true,
                profile: {
                    select: {
                        id: true,
                    },
                },
                user_preferences: {
                    select: {
                        id: true,
                    },
                },
                user_user_roles_user_role: {
                    select: {
                        userId: true,
                    },
                },
                contact: {
                    select: {
                        id: true,
                    },
                },
                project: {
                    select: {
                        id: true,
                    },
                },
                user_login_history: {
                    select: {
                        id: true,
                    },
                },
                comment: {
                    select: {
                        id: true,
                        file: {
                            select: {
                                id: true,
                                file_info: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }

    async findAllGetManyAndCountPaginate() {
        const query = this.prisma.user.findMany({
            skip: 0,
            take: 100,
            select: {
                id: true,
                profile: {
                    select: {
                        id: true,
                    },
                },
                user_preferences: {
                    select: {
                        id: true,
                    },
                },
                user_user_roles_user_role: {
                    select: {
                        userId: true,
                    },
                },
                contact: {
                    select: {
                        id: true,
                    },
                },
                project: {
                    select: {
                        id: true,
                    },
                },
                user_login_history: {
                    select: {
                        id: true,
                    },
                },
                comment: {
                    select: {
                        id: true,
                        file: {
                            select: {
                                id: true,
                                file_info: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        const count = this.prisma.user
            .count({
                select: {
                    _all: true,
                },
            })
            .then((res) => {
                return {
                    count: res._all,
                };
            });
        return Promise.all([query, count]);
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
