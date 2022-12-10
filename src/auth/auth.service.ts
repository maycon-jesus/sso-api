import { CreateUserDto } from './../users/dto/createUserDto';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  register(data: CreateUserDto) {
    return this.usersService.create(data);
  }
}
