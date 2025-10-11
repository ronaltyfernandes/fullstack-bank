import { User } from '../user.entity';
import { CreateUserDto } from './create-user.dto';

export class SelectUserDto extends CreateUserDto {
  constructor(user: User) {
    super();
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.createdAt = user.createdAt;
    this.foto = user.foto;
    this.isActive = user.isActive;
    this.updatedAt = user.updatedAt;
  }
}
