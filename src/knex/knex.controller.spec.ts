import { Test, TestingModule } from '@nestjs/testing';
import { KnexController } from './knex.controller';
import { KnexService } from './knex.service';

describe('KnexController', () => {
    let controller: KnexController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [KnexController],
            providers: [KnexService],
        }).compile();

        controller = module.get<KnexController>(KnexController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
