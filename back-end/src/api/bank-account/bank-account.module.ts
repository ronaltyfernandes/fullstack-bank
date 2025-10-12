import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './bank-account.entity';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, BankAccount, Category])],
  controllers: [BankAccountController],
  providers: [BankAccountService, UserService],
})
export class BankAccountModule {}
