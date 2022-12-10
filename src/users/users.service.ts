import { CreateUserDto } from './dto/createUserDto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getById(id: number) {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(data: CreateUserDto) {
    data.password = hashSync(data.password, 12);
    const r = await this.usersRepository.insert({
      ...data,
    });
    console.log(r);
    return r;
  }
}
