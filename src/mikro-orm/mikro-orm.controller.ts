import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MikroOrmService } from './mikro-orm.service';

@Controller('mikro-orm')
export class MikroOrmController {
  constructor(private readonly mikroOrmService: MikroOrmService) {}

  @Get('test')
  test() {
    return this.mikroOrmService.create();
  }

  @Get('/findAllGetMany')
  async findAllGetMany() {
    console.time('findAllGetMany');
    const result = await this.mikroOrmService.findAllGetMany();
    console.timeEnd('findAllGetMany');
    return result;
  }

  @Get('/findAllGetManyAndCount')
  async findAllGetManyAndCount() {
    console.time('findAllGetManyAndCount');
    const result = await this.mikroOrmService.findAllGetManyAndCount();
    console.timeEnd('findAllGetManyAndCount');
    return result;
  }

  @Get('/findAllGetManyPaginate')
  async findAllGetManyPaginate() {
    console.time('findAllGetManyPaginate');
    const result = await this.mikroOrmService.findAllGetManyPaginate();
    console.timeEnd('findAllGetManyPaginate');
    return result;
  }

  @Get('/findAllGetManyAndCountPaginate')
  async findAllGetManyAndCountPaginate() {
    console.time('findAllGetManyAndCountPaginate');
    const result = await this.mikroOrmService.findAllGetManyAndCountPaginate();
    console.timeEnd('findAllGetManyAndCountPaginate');
    return result;
  }

}
