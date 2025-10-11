import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { Transaction } from '../transaction/transaction.entity';
import { User } from '../user/user.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions!: Transaction[];
}
