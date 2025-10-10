import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  // @Get()
  // @ApiPaginatedResponse(SelectAbortionDto)
  // findAll(@Query() paginationOptions: PaginationOptionsQuery,
  // @Query() abortionFilter: AbortionFilter) {
  //   const options: IPaginationOptions = {
  //     limit: paginationOptions.limit ?? 10,
  //     page: paginationOptions.page ?? 1,
  //   };
  //   return this.abortionService.findAll(options, abortionFilter);
  // }

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
