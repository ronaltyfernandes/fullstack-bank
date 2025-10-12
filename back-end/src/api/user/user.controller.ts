import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationOptionsQuery } from '../util/pagination-options.filter';
import { SelectUserDto } from './dto/select-user.dto';
import { UserFilter } from './dto/filters-user.dto';
import { ApiPaginatedResponse } from '../util/base/pagination/api-paginated-response.decorator';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateBankAccountDto } from '../bank-account/dto/update-bank-account.dto';
// import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/')
  @ApiPaginatedResponse(SelectUserDto)
  findAll(@Query() paginationOptions: PaginationOptionsQuery, @Query() userFilter: UserFilter) {
    const options: typeof paginationOptions = {
      limit: paginationOptions.limit ?? 10,
      page: paginationOptions.page ?? 1,
    };
    return this.userService.findAll(options, userFilter);
  }

  @Get(':id')
  @ApiResponse({
    type: CreateUserDto,
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankAccountDto: UpdateBankAccountDto) {
    return this.userService.update(+id, updateBankAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
