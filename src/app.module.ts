import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMModule } from 'src/typeORM/typeORM.Module';
import { TypeORMLogger } from 'src/typeORM.logger';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MySqlDriver } from '@mikro-orm/mysql';
import { MikroOrmModule as _MikroOrmModule } from './mikro-orm/mikro-orm.module';

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

import { User as mikroUser } from 'src/mikro-entity/User';
import { UserLoginHistory as mikroUserLoginHistory } from 'src/mikro-entity/UserLoginHistory';
import { UserPreferences as mikroUserPreferences } from 'src/mikro-entity/UserPreferences';
import { UserRole as mikroUserRole } from 'src/mikro-entity/UserRole';
import { Project as mikroProject } from 'src/mikro-entity/Project';
import { Profile as mikroProfile } from 'src/mikro-entity/Profile';
import { File as mikroFile } from 'src/mikro-entity/File';
import { FileInfo as mikroFileInfo } from 'src/mikro-entity/FileInfo';
import { Contact as mikroContact } from 'src/mikro-entity/Contact';
import { Comment as mikroComment } from 'src/mikro-entity/Comment';
import { SequelizeModule as _SequelizeModule } from './sequelize/sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';

import { user as sequelizeUser } from 'src/models/user';
import { userLoginHistory as sequelizeUserLoginHistory } from 'src/models/userLoginHistory';
import { userPreferences as sequelizeUserPreferences } from 'src/models/userPreferences';
import { userRole as sequelizeUserRole } from 'src/models/userRole';
import { project as sequelizeProject } from 'src/models/project';
import { profile as sequelizeProfile } from 'src/models/profile';
import { file as sequelizeFile } from 'src/models/file';
import { fileInfo as sequelizeFileInfo } from 'src/models/fileInfo';
import { contact as sequelizeContact } from 'src/models/contact';
import { comment as sequelizeComment } from 'src/models/comment';
import { userUserRolesUserRole as sequelizeUserUserRolesUserRole } from 'src/models';
import { KnexModule } from 'nest-knexjs';
import { KnexModule as _KnexModule } from './knex/knex.module';
import { PrismaModule as _PrismaModule } from 'src/utils/prisma.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'admin',
            password: 'admin1234',
            database: 'orm_benchMark',
            logger: new TypeORMLogger(),
            logging: false,
            entities: [
                User,
                UserLoginHistory,
                UserPreferences,
                UserRole,
                Project,
                Profile,
                File,
                FileInfo,
                Contact,
                Comment,
            ],
            autoLoadEntities: true,
            synchronize: true,
        }),
        MikroOrmModule.forRoot({
            entities: [
                mikroUser,
                mikroUserLoginHistory,
                mikroUserPreferences,
                mikroUserRole,
                mikroProject,
                mikroProfile,
                mikroFile,
                mikroFileInfo,
                mikroContact,
                mikroComment,
            ],
            debug: true,
            loadStrategy: 'select-in',
            autoJoinOneToOneOwner: true,
            user: 'admin',
            password: 'admin1234',
            dbName: 'orm_benchMark',
            driver: MySqlDriver,
            port: 3307,
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'admin',
            password: 'admin1234',
            database: 'orm_benchMark',
            synchronize: false,
            models: [
                sequelizeUser,
                sequelizeUserLoginHistory,
                sequelizeUserPreferences,
                sequelizeUserRole,
                sequelizeProject,
                sequelizeProfile,
                sequelizeFile,
                sequelizeFileInfo,
                sequelizeContact,
                sequelizeComment,
                sequelizeUserUserRolesUserRole,
            ],
        }),
        KnexModule.forRoot({
            config: {
                client: 'mysql2',
                useNullAsDefault: true,
                connection: {
                    host: 'localhost',
                    port: 3307,
                    database: 'orm_benchMark',
                    user: 'admin',
                    password: 'admin1234',
                    ssl: false,
                },
            },
        }),
        TypeORMModule,
        _MikroOrmModule,
        _SequelizeModule,
        _KnexModule,
        _PrismaModule,
        PrismaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
