import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../util/base/dto/baseDto';
import { IncomeExpenseType } from '../../../types/Enums';
import { User } from '../../user/user.entity';

export class CreateCategoryDto extends BaseDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  bank!: string;

  @ApiProperty()
  user!: User;

  @ApiProperty()
  incomeExpensive!: IncomeExpenseType;
}
