import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/api/user/user.entity';
import { BaseDto } from 'src/api/util/base/dto/baseDto';
import { IncomeExpenseType } from 'src/types/Enums';

export class CreateCategoryDto extends BaseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  bank: string;

  @ApiProperty()
  user: User;

  @ApiProperty()
  incomeExpensive: IncomeExpenseType;
}
