import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationOptionsQuery } from '../util/pagination-options.filter';
import { SelectUserDto } from './dto/select-user.dto';
import { UserFilter } from './dto/filters-user.dto';
import { ApiPaginatedResponse } from '../util/base/pagination/api-paginated-response.decorator';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateBankAccountDto } from '../bank-account/dto/update-bank-account.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ← sem guard: rota pública para cadastro
  @Post('/')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  @ApiPaginatedResponse(SelectUserDto)
  findAll(@Query() paginationOptions: PaginationOptionsQuery, @Query() userFilter: UserFilter) {
    const options: typeof paginationOptions = {
      limit: paginationOptions.limit ?? 10,
      page: paginationOptions.page ?? 1,
    };
    return this.userService.findAll(options, userFilter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({ type: CreateUserDto })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankAccountDto: UpdateBankAccountDto) {
    return this.userService.update(+id, updateBankAccountDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
