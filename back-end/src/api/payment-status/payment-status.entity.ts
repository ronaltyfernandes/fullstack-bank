import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base/baseEntity.entity';
import { PaymentStatusType } from '../../types/Enums';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class PaymentStatus extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: PaymentStatusType;

  @OneToMany(() => Transaction, (transaction) => transaction.paymentStatus)
  transactions!: Transaction[];
}
