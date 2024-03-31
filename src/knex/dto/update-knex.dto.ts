import { PartialType } from '@nestjs/mapped-types';
import { CreateKnexDto } from './create-knex.dto';

export class UpdateKnexDto extends PartialType(CreateKnexDto) {}
