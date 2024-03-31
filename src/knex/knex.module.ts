import { Module } from '@nestjs/common';
import { KnexService } from './knex.service';
import { KnexController } from './knex.controller';

@Module({
    controllers: [KnexController],
    providers: [KnexService],
})
export class KnexModule {}
