import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty()
  firstName: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty()
  lastName: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty()
  password: string;
}
