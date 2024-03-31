import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { attachPaginate } from 'knex-paginate';
attachPaginate();

@Injectable()
export class KnexService {
    constructor(@InjectConnection() private readonly knex: Knex) {}

    async findAllGetMany() {
        return this.knex('user')
            .leftJoin(
                'user_login_history',
                'user.id',
                'user_login_history.userId',
            )
            .leftJoin('user_preferences', 'user.id', 'user.userPreferencesId')
            .leftJoin('project', 'user.id', 'project.userId')
            .leftJoin('profile', 'user.id', 'user.profileId')
            .leftJoin('file', 'user.id', 'file.commentsId')
            .leftJoin('file_info', 'user.id', 'file_info.fileId')
            .leftJoin('contact', 'user.id', 'contact.userId')
            .leftJoin('comment', 'user.id', 'comment.userId')
            .leftJoin(
                'user_user_roles_user_role',
                'user.id',
                'user_user_roles_user_role.userId',
            )
            .leftJoin(
                'user_role',
                'user_role.id',
                'user_user_roles_user_role.userRoleId',
            )
            .select([
                'user.id',
                'user_login_history.id',
                'user_preferences.id',
                'project.id',
                'profile.id',
                'file.id',
                'file_info.id',
                'contact.id',
                'comment.id',
                'user_role.id',
            ])
            .limit(100)
            .offset(0);
    }

    async findAllGetManyAndCount() {
        return [];
    }

    async findAllGetManyPaginate() {
        return [];
    }

    async findAllGetManyAndCountPaginate() {
        return [];
    }
}
