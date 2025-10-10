import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/baseEntity.entity';
import { IncomeExpense } from '../income-expense/income-expense.entity';
import { Category } from '../category/category.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';
import { PaymentStatus } from '../payment-status/payment-status.entity';
import { BankAccount } from '../bank-account/bank-account.entity';

@Entity()
export class Transaction extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value!: number;

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @ManyToOne(() => IncomeExpense)
  @JoinColumn({ name: 'income_expense_id' })
  incomeExpense!: IncomeExpense;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod!: PaymentMethod;

  @ManyToOne(() => PaymentStatus)
  @JoinColumn({ name: 'payment_status_id' })
  paymentStatus!: PaymentStatus;

  @ManyToOne(() => BankAccount)
  @JoinColumn({ name: 'bank_account_id' })
  bankAccount!: BankAccount;
}
