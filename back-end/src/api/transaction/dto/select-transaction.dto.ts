import { Transaction } from '../transaction.entity';
import { CreateTransactionDto } from './create-transaction.dto';

export class SelectTransactionDto extends CreateTransactionDto {
  constructor(transaction: Transaction) {
    super();
    this.id = transaction.id;
    this.name = transaction.name;
    this.description = transaction.description;
    this.value = transaction.value;
    this.date = transaction.date;
    this.paymentStatus = transaction.paymentStatus;
    this.paymentMethod = transaction.paymentMethod;
    this.category = transaction.category;
    this.bankAccount = transaction.bankAccount;
    this.createdAt = transaction.createdAt;
    this.updatedAt = transaction.updatedAt;
  }
}
