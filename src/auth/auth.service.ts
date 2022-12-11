import { CreateUserDto } from './../users/dto/createUserDto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDataDto } from './dto/loginDataDto';
import { compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(data: CreateUserDto) {
    const userData = await this.usersService.create(data);
    return userData;
  }

  async login(data: LoginDataDto) {
    const user = await this.usersService.getByEmail(data.email);
    if (!user) throw new UnauthorizedException('Email or password incorrect!');

    const passwordEqual = compareSync(data.password, user.password);
    if (!passwordEqual)
      throw new UnauthorizedException('Email or password incorrect!');

    const token = await this.generateJwtToken({
      userId: user.id,
    });

    return {
      token: token.token,
    };
  }

  async generateJwtToken(data: { userId: number }) {
    const token = jwt.sign(
      {
        userId: data.userId,
      },
      process.env.JWT_SECRET,
      {
        issuer: 'Maycon Jesus',
        expiresIn: '365d',
      },
    );

    return {
      token,
    };
  }
}
