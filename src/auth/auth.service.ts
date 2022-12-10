import { CreateUserDto } from './../users/dto/createUserDto';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(data: CreateUserDto) {
    const userData = await this.usersService.create(data);
    return userData;
  }
}
