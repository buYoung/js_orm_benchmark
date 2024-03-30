import { Test, TestingModule } from '@nestjs/testing';
import { MikroOrmService } from './mikro-orm.service';

describe('MikroOrmService', () => {
  let service: MikroOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MikroOrmService],
    }).compile();

    service = module.get<MikroOrmService>(MikroOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
