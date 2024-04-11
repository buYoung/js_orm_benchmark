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

    @Get('/findAllGetManyAndCountPaginateCustom2')
    async findAllGetManyAndCountPaginateTEST2() {
        console.time('findAllGetManyAndCountPaginate');
        const result = await this.userService.findAllGetManyAndCountPaginateTest2();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }

    @Get('/orm/findAllGetMany')
    async findAllGetManyForOrm() {
        console.time('findAllGetManyForOrm');
        const result = await this.userService.findAllGetManyForOrm();
        console.timeEnd('findAllGetManyForOrm');
        return result;
    }

    @Get('/orm/findAllGetManyAndCount')
    async findAllGetManyAndCountForOrm() {
        console.time('findAllGetManyAndCountForOrm');
        const result =
            await this.userService.findAllGetManyAndCountForOrm();
        console.timeEnd('findAllGetManyAndCountForOrm');
        return result;
    }

    @Get('/orm/findAllGetManyPaginate')
    async findAllGetManyPaginateForOrm() {
        console.time('findAllGetManyPaginate');
        const result =
            await this.userService.findAllGetManyPaginateForOrm();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/orm/findAllGetManyAndCountPaginate')
    async findAllGetManyAndCountPaginateForOrm() {
        console.time('findAllGetManyAndCountPaginateForOrm');
        const result =
            await this.userService.findAllGetManyAndCountPaginateForOrm();
        console.timeEnd('findAllGetManyAndCountPaginateForOrm');
        return result;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
}
