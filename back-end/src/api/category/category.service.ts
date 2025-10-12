import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import applyFilters from '../util/aplyFilters.filter';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FilterCategoryDto } from './dto/filters-category.dto';
import { SelectCategoryDto } from './dto/select-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.repository.save(createCategoryDto);
  }

  async findAll(
    paginationOptions: IPaginationOptions,
    filter: FilterCategoryDto,
  ): Promise<Pagination<SelectCategoryDto>> {
    const query = this.repository.createQueryBuilder('category').orderBy('category.id', 'DESC');
    applyFilters(query, filter, 'category');

    const results = await paginate<Category>(query, paginationOptions);
    const items = results.items.map((user) => new SelectCategoryDto(user));

    return new Pagination<SelectCategoryDto>(items, results.meta);
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { ...rest } = updateCategoryDto;

    const category = this.repository.create({
      id,
      ...rest,
    });

    return this.repository.save(category);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
