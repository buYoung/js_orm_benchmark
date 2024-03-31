import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('prisma')
export class PrismaController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get('test')
    test() {
        return this.prismaService.create();
    }

    @Get('/findAllGetMany')
    async findAllGetMany() {
        console.time('findAllGetMany');
        const result = await this.prismaService.findAllGetMany();
        console.timeEnd('findAllGetMany');
        return result;
    }

    @Get('/findAllGetManyAndCount')
    async findAllGetManyAndCount() {
        console.time('findAllGetManyAndCount');
        const result = await this.prismaService.findAllGetManyAndCount();
        console.timeEnd('findAllGetManyAndCount');
        return result;
    }

    @Get('/findAllGetManyPaginate')
    async findAllGetManyPaginate() {
        console.time('findAllGetManyPaginate');
        const result = await this.prismaService.findAllGetManyPaginate();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/findAllGetManyAndCountPaginate')
    async findAllGetManyAndCountPaginate() {
        console.time('findAllGetManyAndCountPaginate');
        const result = await this.prismaService.findAllGetManyAndCountPaginate();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }
}
