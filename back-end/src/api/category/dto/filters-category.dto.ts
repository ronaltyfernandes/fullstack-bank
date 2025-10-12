import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/api/user/user.entity';
import { IncomeExpenseType } from 'src/types/Enums';

export class FilterCategoryDto {
  @ApiProperty({
    name: 'description',
    required: false,
    example: 'description of an expense or income category',
  })
  description?: string;

  @ApiProperty({
    name: 'name',
    required: false,
    example: 'Food',
  })
  name?: string;

  @ApiProperty({ name: 'incomeExpensive', required: false, example: 'INCOME' })
  incomeExpensive?: IncomeExpenseType;

  @ApiProperty({ name: 'incomeExpensive', required: false, example: 'INCOME' })
  user?: User;
}
