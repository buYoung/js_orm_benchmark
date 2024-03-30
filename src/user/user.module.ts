import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
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

@Module({
    imports: [
        TypeOrmModule.forFeature([
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
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
