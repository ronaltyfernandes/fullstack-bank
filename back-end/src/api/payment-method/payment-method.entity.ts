import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { PaymentMethodType } from '../../types/Enums';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class PaymentMethod extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: PaymentMethodType;

  @OneToMany(() => Transaction, (transaction) => transaction.paymentMethod)
  transactions!: Transaction[];
}
