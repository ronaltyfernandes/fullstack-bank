import { ApiProperty } from '@nestjs/swagger';
import { Meta } from './pagination-swagger';

export class PageDto<T> {
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty({ type: () => Meta })
  readonly meta: Meta;

  constructor(data: T[], meta: Meta) {
    this.data = data;
    this.meta = meta;
  }
}
