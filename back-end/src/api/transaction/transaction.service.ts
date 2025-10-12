import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import applyFilters from '../util/aplyFilters.filter';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionDto } from './dto/filters-transaction.dto';
import { SelectTransactionDto } from './dto/select-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly repository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return this.repository.save(createTransactionDto);
  }

  async findAll(
    paginationOptions: IPaginationOptions,
    filter: FilterTransactionDto,
  ): Promise<Pagination<SelectTransactionDto>> {
    const query = this.repository
      .createQueryBuilder('transaction')
      .orderBy('transaction.id', 'DESC');

    applyFilters(query, filter, 'transaction');

    const results = await paginate<Transaction>(query, paginationOptions);
    const items = results.items.map((transaction) => new SelectTransactionDto(transaction));

    return new Pagination<SelectTransactionDto>(items, results.meta);
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const { ...rest } = updateTransactionDto;

    const transaction = this.repository.create({
      id,
      ...rest,
    });

    return this.repository.save(transaction);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
