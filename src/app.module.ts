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

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'admin',
            password: 'admin1234',
            database: 'orm_benchMark',
            logger: new TypeORMLogger,
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
        TypeORMModule,
        _MikroOrmModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
