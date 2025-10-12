import { Entity, Column, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from '../util/base/baseEntity.entity';
import { Category } from '../category/category.entity';
import { BankAccount } from '../bank-account/bank-account.entity';

@Unique(['email'])
@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password!: string;

  @Column({ type: 'varchar', unique: true, length: 150, nullable: false })
  email!: string;

  @Column({ type: 'bytea', nullable: true })
  foto?: Buffer;

  @Column({ type: 'boolean', default: true, nullable: false })
  isActive!: boolean;

  @OneToMany(() => Category, (category) => category.user)
  category!: Category[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.user)
  bankAccount!: BankAccount[];
}
