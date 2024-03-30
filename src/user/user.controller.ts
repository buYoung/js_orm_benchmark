import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('test')
    test() {
        return this.userService.create();
    }

    @Get('/findAllGetMany')
    findAllGetMany() {
        console.time('findAllGetMany');
        const result = this.userService.findAllGetMany();
        console.timeEnd('findAllGetMany');
        return result;
    }

    @Get('/findAllGetManyAndCount')
    findAllGetManyAndCount() {
        console.time('findAllGetManyAndCount');
        const result = this.userService.findAllGetManyAndCount();
        console.timeEnd('findAllGetManyAndCount');
        return result;
    }

    @Get('/findAllGetManyPaginate')
    findAllGetManyPaginate() {
        console.time('findAllGetManyPaginate');
        const result = this.userService.findAllGetManyPaginate();
        console.timeEnd('findAllGetManyPaginate');
        return result;
    }

    @Get('/findAllGetManyAndCountPaginate')
    findAllGetManyAndCountPaginate() {
        console.time('findAllGetManyAndCountPaginate');
        const result = this.userService.findAllGetManyAndCountPaginate();
        console.timeEnd('findAllGetManyAndCountPaginate');
        return result;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
}
