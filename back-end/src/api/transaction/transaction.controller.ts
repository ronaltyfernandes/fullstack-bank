import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../util/base/pagination/api-paginated-response.decorator';
import { PaginationOptionsQuery } from '../util/pagination-options.filter';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';
import { FilterTransactionDto } from './dto/filters-transaction.dto';
import { SelectTransactionDto } from './dto/select-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}
  @Post('/')
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get('')
  @ApiPaginatedResponse(SelectTransactionDto)
  findAll(
    @Query() paginationOptions: PaginationOptionsQuery,
    @Query() filterTransactionDto: FilterTransactionDto,
  ) {
    const options: typeof paginationOptions = {
      limit: paginationOptions.limit ?? 10,
      page: paginationOptions.page ?? 1,
    };
    return this.transactionService.findAll(options, filterTransactionDto);
  }

  @Get(':id')
  @ApiResponse({
    type: CreateTransactionDto,
  })
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.delete(+id);
  }
}
