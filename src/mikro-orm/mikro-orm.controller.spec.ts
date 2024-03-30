import { Test, TestingModule } from '@nestjs/testing';
import { MikroOrmController } from './mikro-orm.controller';
import { MikroOrmService } from './mikro-orm.service';

describe('MikroOrmController', () => {
  let controller: MikroOrmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MikroOrmController],
      providers: [MikroOrmService],
    }).compile();

    controller = module.get<MikroOrmController>(MikroOrmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
