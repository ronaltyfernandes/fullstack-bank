import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../util/base/dto/baseDto';
import { User } from '../../user/user.entity';

export class CreateBankAccountDto extends BaseDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  isActive!: boolean;

  @ApiProperty()
  icon?: Buffer;

  @ApiProperty()
  bank!: string;

  @ApiProperty()
  balance!: number;

  @ApiProperty()
  user!: User;
}
