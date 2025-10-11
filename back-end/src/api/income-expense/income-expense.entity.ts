import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { IncomeExpenseType } from '../../types/Enums';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class IncomeExpense extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: IncomeExpenseType;

  @OneToMany(() => Transaction, (transaction) => transaction.incomeExpense)
  transactions!: Transaction[];
}
