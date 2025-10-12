import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { BankAccount } from './api/bank-account/bank-account.entity';
import { Category } from './api/category/category.entity';
import { Transaction } from './api/transaction/transaction.entity';
import { User } from './api/user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'test',
  password: process.env.DB_PASS || 'test',
  database: process.env.DB_NAME || 'test',
  synchronize: true,
  logging: false,
  entities: [User, BankAccount, Category, Transaction],
});
