import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../util/base/dto/baseDto';
import { IncomeExpenseType } from '../../../types/Enums';
import { User } from '../../user/user.entity';

export class CreateCategoryDto extends BaseDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  user!: User;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  incomeExpense!: IncomeExpenseType;
}
