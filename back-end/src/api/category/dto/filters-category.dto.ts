import { ApiProperty } from '@nestjs/swagger';
import { IncomeExpenseType } from '../../../types/Enums';
import { User } from '../../user/user.entity';

export class FilterCategoryDto {
  @ApiProperty({ name: 'description', required: false })
  description?: string;

  @ApiProperty({ name: 'name', required: false })
  name?: string;

  @ApiProperty({ name: 'incomeExpense', required: false })
  incomeExpense?: IncomeExpenseType;

  @ApiProperty({ name: 'user', required: false })
  user?: User;

  @ApiProperty({ name: 'userId', required: false, example: 1 })
  userId?: number;
}
