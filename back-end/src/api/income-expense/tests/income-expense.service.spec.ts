import { Test, TestingModule } from '@nestjs/testing';
import { OncomeExpenseService } from '../income-expense.service';

describe('OncomeExpenseService', () => {
  let service: OncomeExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OncomeExpenseService],
    }).compile();

    service = module.get<OncomeExpenseService>(OncomeExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
