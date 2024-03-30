import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { TypeORMModule } from 'src/typeORM/typeORM.Module';
import { TypeORMLogger } from 'src/typeORM.logger';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'admin',
            password: 'admin1234',
            database: 'orm_benchMark',
            // logger: new TypeORMLogger,
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
        TypeORMModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
