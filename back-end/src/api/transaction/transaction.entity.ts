import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { Category } from '../category/category.entity';
import { BankAccount } from '../bank-account/bank-account.entity';
import { PaymentMethodType, PaymentStatusType } from '../../types/Enums';

@Entity()
export class Transaction extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  description!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  value!: number;

  @Column({ type: 'timestamp', nullable: false })
  date!: Date;

  @Column({ type: 'enum', enum: PaymentStatusType, enumName: 'payment_status', nullable: false })
  paymentStatus!: PaymentStatusType;

  @Column({
    type: 'enum',
    enum: PaymentMethodType,
    enumName: 'payment_method_type',
    nullable: false,
  })
  paymentMethod!: PaymentMethodType;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @ManyToOne(() => BankAccount, { nullable: false })
  @JoinColumn({ name: 'bank_account_id' })
  bankAccount!: BankAccount;
}
