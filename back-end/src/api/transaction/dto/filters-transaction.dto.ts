import { ApiProperty } from '@nestjs/swagger';
import { IncomeExpenseType, PaymentMethodType, PaymentStatusType } from '../../../types/Enums';
import { Category } from '../../category/category.entity';
import { BankAccount } from '../../bank-account/bank-account.entity';
import { User } from '../../user/user.entity';

export class FilterTransactionDto {
  @ApiProperty({ required: false, example: 'Food' })
  name?: string;

  @ApiProperty({ required: false, example: 100.0 })
  value?: number;

  @ApiProperty({ required: false, example: '2024-05-01' })
  date?: Date;

  // 🔹 Novo: intervalo de valor
  @ApiProperty({ required: false, example: 50.0, description: 'Valor mínimo da transação' })
  minValue?: number;

  @ApiProperty({ required: false, example: 1000.0, description: 'Valor máximo da transação' })
  maxValue?: number;

  // 🔹 Novo: intervalo de data
  @ApiProperty({
    required: false,
    example: '2024-01-01',
    description: 'Data mínima (início do período)',
  })
  startDate?: Date;

  @ApiProperty({
    required: false,
    example: '2024-12-31',
    description: 'Data máxima (fim do período)',
  })
  endDate?: Date;

  @ApiProperty({ required: false, example: 'PAID' })
  paymentStatus?: PaymentStatusType;

  @ApiProperty({ required: false, example: 'PIX' })
  paymentMethod?: PaymentMethodType;

  @ApiProperty({ required: false, example: 1 })
  category?: Category;

  @ApiProperty({ required: false, example: 1 })
  bankAccount?: BankAccount;

  @ApiProperty({ required: false, example: 1 })
  user?: User;

  @ApiProperty({ required: false, example: 'INCOME' })
  incomeExpense?: IncomeExpenseType;
}
