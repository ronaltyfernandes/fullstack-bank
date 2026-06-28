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
    const query = this.repository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.user', 'user')
      .orderBy('category.id', 'DESC');

    if (filter.userId) {
      query.andWhere('user.id = :userId', { userId: filter.userId });
    }

    // remove userId antes de passar pro applyFilters genérico
    const { userId, ...restFilter } = filter;
    applyFilters(query, restFilter, 'category');

    const results = await paginate<Category>(query, paginationOptions);
    const items = results.items.map((cat) => new SelectCategoryDto(cat));

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
