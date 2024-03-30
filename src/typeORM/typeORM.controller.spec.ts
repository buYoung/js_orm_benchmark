import { Test, TestingModule } from '@nestjs/testing';
import { TypeORMController } from 'src/typeORM/typeORM.Controller';
import { TypeORMService } from 'src/typeORM/typeORM.service';

describe('TypeORMController', () => {
    let controller: TypeORMController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TypeORMController],
            providers: [TypeORMService],
        }).compile();

        controller = module.get<TypeORMController>(TypeORMController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
