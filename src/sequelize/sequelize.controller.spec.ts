import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeController } from './sequelize.controller';
import { SequelizeService } from './sequelize.service';

describe('SequelizeController', () => {
    let controller: SequelizeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SequelizeController],
            providers: [SequelizeService],
        }).compile();

        controller = module.get<SequelizeController>(SequelizeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
