import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFilter } from './dto/filters-user.dto';
import { SelectUserDto } from './dto/select-user.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import applyFilters from '../util/aplyFilters.filter';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findAll(
    paginationOptions: IPaginationOptions,
    userFilter: UserFilter,
  ): Promise<Pagination<SelectUserDto>> {
    const query = this.repository.createQueryBuilder('user').orderBy('user.id', 'DESC');
    applyFilters(query, userFilter, 'user');

    const results = await paginate<User>(query, paginationOptions);
    const items = results.items.map((user) => new SelectUserDto(user));

    return new Pagination<SelectUserDto>(items, results.meta);
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async findByEmail(email: string) {
    const responseUser = await this.repository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'isActive', 'bankAccount', 'category'],
    });
    return responseUser;
  }

  async create(createUserDto: CreateUserDto) {
    return this.repository.save({ ...createUserDto });
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
