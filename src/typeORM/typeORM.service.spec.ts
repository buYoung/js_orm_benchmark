import { Test, TestingModule } from '@nestjs/testing';
import { TypeORMService } from 'src/user/type-o-r-m.service';

describe('TypeORMService', () => {
    let service: TypeORMService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TypeORMService],
        }).compile();

        service = module.get<TypeORMService>(TypeORMService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
