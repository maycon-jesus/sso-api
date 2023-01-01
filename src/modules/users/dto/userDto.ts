import { ApplicationEntity } from './../../applications/entities/application.entity';
import { UserEntity } from '../entities/user.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserDto implements UserEntity {
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
  applications: ApplicationEntity[];

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
