import { UserDto } from 'src/modules/users/dto/userDto';
import { CreateUserDto } from './dto/createUserDto';
import { UserEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';
import * as hashMD5 from 'crypto-js/md5';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
      relations: {
        applications: true,
      },
    });
    return new UserDto(user);
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });
    return new UserDto(user);
  }

  async create(data: CreateUserDto): Promise<UserEntity> {
    data.password = hashSync(data.password, 12);
    const gravatarHash = hashMD5(data.email).toString();

    const r = await this.usersRepository.insert({
      ...data,
      gravatarHash,
    });
    const userId = r.identifiers[0].id;

    const user = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
    });

    return new UserDto(user);
  }
}
