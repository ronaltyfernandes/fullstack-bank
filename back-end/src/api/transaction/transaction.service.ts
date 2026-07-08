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

  //Create
  async create(createTransactionDto: CreateTransactionDto) {
    return this.repository.save(createTransactionDto);
  }

  //Get
  async findAll(
    paginationOptions: IPaginationOptions,
    filter: FilterTransactionDto,
  ): Promise<Pagination<SelectTransactionDto>> {
    const query = this.repository
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.bankAccount', 'bankAccount')
      .leftJoinAndSelect('bankAccount.user', 'user')
      .leftJoinAndSelect('transaction.category', 'category')
      .orderBy('transaction.date', 'DESC');

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

  async getTotalsByCategory(filter: FilterTransactionDto) {
    const { incomeExpense, userId, ...filters } = filter;

    const query = this.repository
      .createQueryBuilder('transaction')
      .leftJoin('transaction.bankAccount', 'bankAccount')
      .leftJoin('bankAccount.user', 'user')
      .leftJoin('transaction.category', 'category')
      .select('category.id', 'id')
      .addSelect('category.name', 'label')
      .addSelect('SUM(transaction.value)', 'value')
      .groupBy('category.id')
      .addGroupBy('category.name');

    if (incomeExpense) {
      query.andWhere('category.incomeExpense = :incomeExpense', { incomeExpense });
    }

    if (filter.userId) {
      query.andWhere('user.id = :userId', { userId });
      delete filter.userId;
    }

    applyFilters(query, filters, 'transaction');

    const raw = await query.getRawMany();

    return raw.map((item) => ({
      id: Number(item.id),
      label: item.label,
      value: Number(item.value),
    }));
  }

  async getMonthlyBalance(filter: FilterTransactionDto) {
    const { userId, ...filters } = filter;

    const query = this.repository
      .createQueryBuilder('transaction')
      .leftJoin('transaction.bankAccount', 'bankAccount')
      .leftJoin('bankAccount.user', 'user')
      .leftJoin('transaction.category', 'category')
      .select("TO_CHAR(transaction.date, 'YYYY-MM')", 'month')
      .addSelect(
        "COALESCE(SUM(CASE WHEN category.incomeExpense = 'INCOME' THEN transaction.value ELSE 0 END), 0)",
        'income',
      )
      .addSelect(
        "COALESCE(SUM(CASE WHEN category.incomeExpense = 'EXPENSE' THEN transaction.value ELSE 0 END), 0)",
        'expense',
      )
      .addSelect(
        "COALESCE(SUM(CASE WHEN category.incomeExpense = 'INCOME' THEN transaction.value ELSE 0 END), 0) - COALESCE(SUM(CASE WHEN category.incomeExpense = 'EXPENSE' THEN transaction.value ELSE 0 END), 0)",
        'balance',
      )
      .groupBy("TO_CHAR(transaction.date, 'YYYY-MM')")
      .orderBy("TO_CHAR(transaction.date, 'YYYY-MM')", 'ASC');

    if (userId) {
      query.andWhere('user.id = :userId', { userId });
    }

    applyFilters(query, filters, 'transaction');

    const raw = await query.getRawMany();

    let accumulatedBalance = 0;

    return raw.map((item) => {
      const income = Number(item.income);
      const expense = Number(item.expense);
      const balance = Number(item.balance);

      accumulatedBalance += balance;

      return {
        month: item.month,
        income,
        expense,
        balance,
        accumulatedBalance,
      };
    });
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  //Update
  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const { ...rest } = updateTransactionDto;

    const transaction = this.repository.create({ id, ...rest });

    return this.repository.save(transaction);
  }

  //Delete
  async delete(id: number) {
    return this.repository.delete(id);
  }
}
