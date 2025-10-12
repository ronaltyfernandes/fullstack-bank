import { BankAccount } from '../bank-account.entity';
import { CreateBankAccountDto } from './create-bank-account.dto';

export class SelectBankAccountDto extends CreateBankAccountDto {
  constructor(bankAccount: BankAccount) {
    super();
    this.id = bankAccount.id;
    this.name = bankAccount.name;
    this.balance = bankAccount.balance;
    this.createdAt = bankAccount.createdAt;
    this.icon = bankAccount.icon;
    this.isActive = bankAccount.isActive;
    this.updatedAt = bankAccount.updatedAt;
    this.user = bankAccount.user;
  }
}
