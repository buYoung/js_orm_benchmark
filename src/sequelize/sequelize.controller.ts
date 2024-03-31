import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { SequelizeService } from './sequelize.service';

@Controller('sequelize')
export class SequelizeController {
    constructor(private readonly sequelizeService: SequelizeService) {}

    @Get('test')
    test() {
        return this.sequelizeService.create();
    }

    @Get('/findAllGetMany')
    async findAllGetMany() {
        console.time('findAllGetMany');
        const result = await this.sequelizeService.findAllGetMany();
        console.timeEnd('findAllGetMany');
        return result;
    }

    @Get('/findAllGetManyAndCount')
    async findAllGetManyAndCount() {
        console.time('findAllGetManyAndCount');
        const result = await this.sequelizeService.findAllGetManyAndCount();
        console.timeEnd('findAllGetManyAndCount');
        return result;
    }

    @Get('/findAllGetManyPaginate')
    async findAllGetManyPaginate() {
        console.time('findAllGetManyPaginate');
        const result = await this.sequelizeService.findAllGetManyPaginate();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/findAllGetManyAndCountPaginate')
    async findAllGetManyAndCountPaginate() {
        console.time('findAllGetManyAndCountPaginate');
        const result = await this.sequelizeService.findAllGetManyAndCountPaginate();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.sequelizeService.findOne(+id);
    }
}
