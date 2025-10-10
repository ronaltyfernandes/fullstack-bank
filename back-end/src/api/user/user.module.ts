import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CategoryService } from '../category/category.service';
import { User } from './user.entity';
import { BankAccount } from '../bank-account/bank-account.entity';
import { Category } from '../category/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountService } from '../bank-account/bank-account.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, BankAccount, Category])],
  controllers: [UserController],
  providers: [UserService, BankAccountService, CategoryService],
})
export class UserModule {}
