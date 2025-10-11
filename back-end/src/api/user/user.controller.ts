import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationOptionsQuery } from '../util/pagination-options.filter';
import { SelectUserDto } from './dto/select-user.dto';
import { UserFilter } from './dto/filters-user.dto';
import { ApiPaginatedResponse } from '../util/base/pagination/api-paginated-response.decorator';
// import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get('/')
  @ApiPaginatedResponse(SelectUserDto)
  findAll(@Query() paginationOptions: PaginationOptionsQuery, @Query() abortionFilter: UserFilter) {
    const options: typeof paginationOptions = {
      limit: paginationOptions.limit ?? 10,
      page: paginationOptions.page ?? 1,
    };
    return this.userService.findAll(options, abortionFilter);
  }

  // @Get(':id')
  // @ApiResponse({
  //   type: SelectAbortionDto,
  // })
  // findOne(@Param('id') id: string) {
  //   return this.abortionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAbortionDto: UpdateAbortionDto) {
  //   return this.abortionService.update(+id, updateAbortionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.abortionService.remove(+id);
  // }
}
