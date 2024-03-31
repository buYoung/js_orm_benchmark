import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { KnexService } from './knex.service';
import { CreateKnexDto } from './dto/create-knex.dto';
import { UpdateKnexDto } from './dto/update-knex.dto';

@Controller('knex')
export class KnexController {
    constructor(private readonly knexService: KnexService) {}
    @Get('/findAllGetMany')
    async findAllGetMany() {
        console.time('findAllGetMany');
        const result = await this.knexService.findAllGetMany();
        console.timeEnd('findAllGetMany');
        return result;
    }

    @Get('/findAllGetManyAndCount')
    async findAllGetManyAndCount() {
        console.time('findAllGetManyAndCount');
        const result = await this.knexService.findAllGetManyAndCount();
        console.timeEnd('findAllGetManyAndCount');
        return result;
    }

    @Get('/findAllGetManyPaginate')
    async findAllGetManyPaginate() {
        console.time('findAllGetManyPaginate');
        const result = await this.knexService.findAllGetManyPaginate();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/findAllGetManyAndCountPaginate')
    async findAllGetManyAndCountPaginate() {
        console.time('findAllGetManyAndCountPaginate');
        const result = await this.knexService.findAllGetManyAndCountPaginate();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }
}
