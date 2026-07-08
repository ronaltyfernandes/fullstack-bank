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
import { ApiResponse } from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../util/base/pagination/api-paginated-response.decorator';
import { PaginationOptionsQuery } from '../util/pagination-options.filter';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SelectCategoryDto } from './dto/select-category.dto';
import { FilterCategoryDto } from './dto/filters-category.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get('')
  @ApiPaginatedResponse(SelectCategoryDto)
  findAll(
    @Query() paginationOptions: PaginationOptionsQuery,
    @Query() filterCategoryDto: FilterCategoryDto,
  ) {
    const options: typeof paginationOptions = {
      limit: paginationOptions.limit ?? 100,
      page: paginationOptions.page ?? 1,
    };
    return this.categoryService.findAll(options, filterCategoryDto);
  }

  @Get(':id')
  @ApiResponse({ type: CreateCategoryDto })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.delete(+id);
  }
}
