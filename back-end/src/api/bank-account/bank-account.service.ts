import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from './bank-account.entity';
import { Repository } from 'typeorm';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { BankAccountFilter } from './dto/filters-bank-account.dto';
import { SelectBankAccountDto } from './dto/select-bank-account.dto';
import applyFilters from '../util/aplyFilters.filter';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectRepository(BankAccount)
    private readonly repository: Repository<BankAccount>,
  ) {}

  async create(createBankAccountDto: CreateBankAccountDto) {
    return this.repository.save(createBankAccountDto);
  }

  async findAll(
    paginationOptions: IPaginationOptions,
    filter: BankAccountFilter,
  ): Promise<Pagination<SelectBankAccountDto>> {

    const query = this.repository
      .createQueryBuilder('bank-account')
      .leftJoinAndSelect('bank-account.user', 'user')
      .orderBy('bank-account.name', 'DESC');

    const { userId, ...restFilter } = filter;

    applyFilters(query, restFilter, 'bank-account');

    if (userId) {
      query.andWhere('user.id = :userId', { userId });
    }

    const results = await paginate<BankAccount>(query, paginationOptions);

    const items = results.items.map(
      (bankAccount) => new SelectBankAccountDto(bankAccount),
    );

    return new Pagination<SelectBankAccountDto>(items, results.meta);
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    const { ...rest } = updateBankAccountDto;

    const bankAccount = this.repository.create({
      id,
      ...rest,
    });

    return this.repository.save(bankAccount);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
