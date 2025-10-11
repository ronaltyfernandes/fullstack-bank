import { ApiProperty } from '@nestjs/swagger';

export class Meta {
  @ApiProperty({ example: 1 })
  itemCount: number;

  @ApiProperty({ example: 10 })
  totalItems?: number;

  @ApiProperty({ example: 10 })
  itemsPerPage: number;

  @ApiProperty({ example: 1 })
  totalPages?: number;

  @ApiProperty({ example: 1 })
  currentPage: number;

  constructor(
    itemCount: number,
    totalItems?: number,
    itemsPerPage: number = 10,
    totalPages?: number,
    currentPage: number = 1,
  ) {
    this.itemCount = itemCount;
    this.totalItems = totalItems;
    this.itemsPerPage = itemsPerPage;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
  }
}

export function paginationDTOResponse<T>(type: new (...args: any) => T) {
  class PaginationDTOResponse {
    @ApiProperty({ type: type, isArray: true })
    items: T[];

    @ApiProperty({ type: Meta })
    meta: Meta;
  }

  return PaginationDTOResponse;
}

export function AnimalDTOResponse<T>(type: new (...args: any) => T) {
  class AnimalDTOResponse {
    @ApiProperty({ type: type, isArray: true })
    items: T[];

    @ApiProperty({ type: Meta })
    meta: Meta;
  }

  return AnimalDTOResponse;
}
