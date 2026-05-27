import { Column, Entity, ManyToOne, JoinColumn, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { User } from '../user/user.entity';
import { Transaction } from '../transaction/transaction.entity';

@Unique(['name', 'user'])
@Entity()
export class BankAccount extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name!: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  isActive!: boolean;

  @Column({ type: 'bytea', nullable: true }) //to do mudar para cor
  icon?: Buffer;

  @Column({ type: 'varchar', length: 100, nullable: false })
  bank!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, nullable: false })
  balance!: number;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @OneToMany(() => Transaction, (transaction) => transaction.bankAccount)
  transaction!: Transaction[];
}
