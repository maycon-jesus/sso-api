import { UserEntity } from './../users/entities/user.entity';
import { CreateUserDto } from './../users/dto/createUserDto';
import { AuthService } from './auth.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/userDto';

@ApiTags('Autenticação')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // /register
  @ApiOperation({
    summary: 'Create account',
  })
  @ApiResponse({
    status: 200,
    schema: {
      allOf: [
        {
          $ref: getSchemaPath(UserDto),
        },
      ],
    },
  })
  @Put('/register')
  async createAccount(@Body() data: CreateUserDto) {
    const userData = await this.authService.register(data);
    return userData;
  }

  // /login
  // TODO fazer endpoint de login
}
