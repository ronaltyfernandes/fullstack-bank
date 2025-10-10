import { Module } from '@nestjs/common';
import { IncomeExpenseController } from './income-expense.controller';

@Module({
  controllers: [IncomeExpenseController],
})
export class IncomeExpenseModule {}
