import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    if (!user.password) {
      throw new UnauthorizedException('Senha não encontrada no banco');
     }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('bcrypt.compare resultado:', isMatch);
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("entrou aqui ememo")
      // Remove o campo password do retorno
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }

  async login(user: any) {
    const token = this.jwtService.sign({ username: user.email, sub: user.id });
    return {
      access_token: token,
      token,
    };
  }
}
