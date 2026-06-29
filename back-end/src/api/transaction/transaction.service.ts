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
      .leftJoinAndSelect('transaction.bankAccount', 'bankAccount')
      .leftJoinAndSelect('bankAccount.user', 'user')
      .leftJoinAndSelect('transaction.category', 'category') // <- adicione esta linha
      .orderBy('transaction.id', 'DESC');

    // filtra por userId via bankAccount
    if (filter.userId) {
      query.andWhere('user.id = :userId', { userId: filter.userId });
      delete filter.userId; // evita que applyFilters tente usar também
    }

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
