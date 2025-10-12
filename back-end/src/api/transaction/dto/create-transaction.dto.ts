import { ApiProperty } from '@nestjs/swagger';
import { BankAccount } from 'src/api/bank-account/bank-account.entity';
import { Category } from 'src/api/category/category.entity';
import { BaseDto } from 'src/api/util/base/dto/baseDto';
import { PaymentMethodType, PaymentStatusType } from 'src/types/Enums';

export class CreateTransactionDto extends BaseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  paymentStatus: PaymentStatusType;

  @ApiProperty()
  paymentMethod: PaymentMethodType;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  bankAccount: BankAccount;
}
