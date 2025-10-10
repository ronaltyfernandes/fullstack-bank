import { Test, TestingModule } from '@nestjs/testing';
import { IncomeExpenseController } from './income-expense.controller';

describe('IncomeExpenseController', () => {
  let controller: IncomeExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeExpenseController],
    }).compile();

    controller = module.get<IncomeExpenseController>(IncomeExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
