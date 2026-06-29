import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { BankAccountService } from './bank-account.service';
import { BankAccountFilter } from './dto/filters-bank-account.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { SelectBankAccountDto } from './dto/select-bank-account.dto';
import { ApiPaginatedResponse } from '../util/base/pagination/api-paginated-response.decorator';
import { PaginationOptionsQuery } from '../util/pagination-options.filter';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}
  @Post('/')
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountService.create(createBankAccountDto);
  }

  @Get('')
  @ApiPaginatedResponse(SelectBankAccountDto)
  findAll(
    @Query() paginationOptions: PaginationOptionsQuery,
    @Query() bankAccountFilter: BankAccountFilter,
  ) {
    const options: typeof paginationOptions = {
      limit: paginationOptions.limit ?? 10,
      page: paginationOptions.page ?? 1,
    };
    return this.bankAccountService.findAll(options, bankAccountFilter);
  }

  @Get(':id')
  @ApiResponse({
    type: CreateBankAccountDto,
  })
  findOne(@Param('id') id: string) {
    return this.bankAccountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankAccountDto: UpdateBankAccountDto) {
    return this.bankAccountService.update(+id, updateBankAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountService.delete(+id);
  }
}
