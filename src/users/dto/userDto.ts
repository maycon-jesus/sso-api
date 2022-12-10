import { UserEntity } from './../entities/user.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserDto {
  @ApiResponseProperty()
  id: number;

  @ApiResponseProperty()
  email: string;

  @ApiResponseProperty()
  firstName: string;

  @ApiResponseProperty()
  lastName: string;

  @ApiResponseProperty()
  gravatarHash: string;

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
