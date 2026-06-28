import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { Transaction } from '../transaction/transaction.entity';
import { User } from '../user/user.entity';
import { IncomeExpenseType } from '../../types/Enums';

@Unique(['name', 'user'])
@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  description!: string;

  @Column({ type: 'enum', enum: IncomeExpenseType, nullable: false })
  incomeExpensive!: IncomeExpenseType;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions!: Transaction[];
}
