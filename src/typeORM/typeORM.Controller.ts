import { Controller, Get, Param } from '@nestjs/common';
import { TypeORMService } from 'src/typeORM/typeORM.service';

@Controller('typeORM')
export class TypeORMController {
    constructor(private readonly userService: TypeORMService) {}

    @Get('test')
    test() {
        return this.userService.create();
    }

    @Get('/findAllGetMany')
    async findAllGetMany() {
        console.time('findAllGetMany');
        const result = await this.userService.findAllGetMany();
        console.timeEnd('findAllGetMany');
        return result;
    }

    @Get('/findAllGetManyAndCount')
    async findAllGetManyAndCount() {
        console.time('findAllGetManyAndCount');
        const result = await this.userService.findAllGetManyAndCount();
        console.timeEnd('findAllGetManyAndCount');
        return result;
    }

    @Get('/findAllGetManyPaginate')
    async findAllGetManyPaginate() {
        console.time('findAllGetManyPaginate');
        const result = await this.userService.findAllGetManyPaginate();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/findAllGetManyAndCountPaginate')
    async findAllGetManyAndCountPaginate() {
        console.time('findAllGetManyAndCountPaginate');
        const result = await this.userService.findAllGetManyAndCountPaginate();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
}
