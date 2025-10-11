import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/api/util/base/dto/baseDto';

export class CreateUserDto extends BaseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  foto?: Buffer;

  @ApiProperty()
  isActive: boolean;
}
