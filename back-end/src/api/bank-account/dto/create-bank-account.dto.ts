import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/api/user/user.entity';
import { BaseDto } from 'src/api/util/base/dto/baseDto';

export class CreateBankAccountDto extends BaseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  icon?: Buffer;

  @ApiProperty()
  bank: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  user: User;
}
