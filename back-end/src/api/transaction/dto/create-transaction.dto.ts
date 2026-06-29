import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../util/base/dto/baseDto';
import { PaymentMethodType, PaymentStatusType } from '../../../types/Enums';
import { Category } from '../../category/category.entity';
import { BankAccount } from '../../bank-account/bank-account.entity';

export class CreateTransactionDto extends BaseDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  value!: number;

  @ApiProperty()
  date!: Date;

  @ApiProperty()
  paymentStatus!: PaymentStatusType;

  @ApiProperty()
  paymentMethod!: PaymentMethodType;

  @ApiProperty()
  category!: Category;

  @ApiProperty()
  bankAccount!: BankAccount;
}
