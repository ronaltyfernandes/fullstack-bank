import { Entity, Column, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { Category } from '../category/category.entity';
import { BankAccount } from '../bank-account/bank-account.entity';

@Unique(['email'])
@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 255 })
  password!: string;

  @Column({ type: 'varchar', unique: true, length: 150 })
  email!: string;

  @Column({ type: 'bytea', nullable: true })
  foto?: Buffer;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @OneToMany(() => Category, (category) => category.user)
  category!: Category[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.user)
  bankAccount!: BankAccount[];
}
