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

    @Get('/findAllGetManyAndCountPaginateCustom')
    async findAllGetManyAndCountPaginateTEST() {
        console.time('findAllGetManyAndCountPaginate');
        const result = await this.userService.findAllGetManyAndCountPaginateTest();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }

    @Get('/active-record/findAllGetMany')
    async findAllGetManyForActiveRecord() {
        console.time('findAllGetManyForActiveRecord');
        const result = await this.userService.findAllGetManyForActiveRecord();
        console.timeEnd('findAllGetManyForActiveRecord');
        return result;
    }

    @Get('/active-record/findAllGetManyAndCount')
    async findAllGetManyAndCountForActiveRecord() {
        console.time('findAllGetManyAndCountForActiveRecord');
        const result =
            await this.userService.findAllGetManyAndCountForActiveRecord();
        console.timeEnd('findAllGetManyAndCountForActiveRecord');
        return result;
    }

    @Get('/active-record/findAllGetManyPaginate')
    async findAllGetManyPaginateForActiveRecord() {
        console.time('findAllGetManyPaginate');
        const result =
            await this.userService.findAllGetManyPaginateForActiveRecord();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/active-record/findAllGetManyAndCountPaginate')
    async findAllGetManyAndCountPaginateForActiveRecord() {
        console.time('findAllGetManyAndCountPaginateForActiveRecord');
        const result =
            await this.userService.findAllGetManyAndCountPaginateForActiveRecord();
        console.timeEnd('findAllGetManyAndCountPaginateForActiveRecord');
        return result;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
}
