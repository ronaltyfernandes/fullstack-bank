import { ApiProperty } from '@nestjs/swagger';

export class UserFilter {
  @ApiProperty({ name: 'isActive', required: false, example: 'true' })
  isActive?: boolean;
}
