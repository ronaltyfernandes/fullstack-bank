import { ApiProperty } from '@nestjs/swagger';

export class BankAccountFilter {
  @ApiProperty({ name: 'isActive', required: false, example: 'true' })
  isActive?: boolean;

  @ApiProperty({ name: 'user', required: false, example: '1' })
  user?: number;

  @ApiProperty({ name: 'userId', required: false, example: 1 })
  userId?: number;
}
