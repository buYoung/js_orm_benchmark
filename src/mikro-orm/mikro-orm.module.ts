import { Module } from '@nestjs/common';
import { MikroOrmService } from './mikro-orm.service';
import { MikroOrmController } from './mikro-orm.controller';
import { MikroOrmModule as baseMikroOrmModule } from '@mikro-orm/nestjs'

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
    baseMikroOrmModule.forFeature({
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
      ]
    })
  ],
  controllers: [MikroOrmController],
  providers: [MikroOrmService],
})
export class MikroOrmModule {}
