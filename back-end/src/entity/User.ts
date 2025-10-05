import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  foto: string;

  @Column()
  isActive: boolean;
}
