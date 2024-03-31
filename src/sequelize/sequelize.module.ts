import { Module } from '@nestjs/common';
import { SequelizeService } from './sequelize.service';
import { SequelizeController } from './sequelize.controller';
import { SequelizeModule as _SequelizeModule } from '@nestjs/sequelize';

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

@Module({
    imports: [
        _SequelizeModule.forFeature([
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
        ]),
    ],
    controllers: [SequelizeController],
    providers: [SequelizeService],
})
export class SequelizeModule {}
