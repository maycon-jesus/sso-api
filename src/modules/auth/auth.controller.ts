import { CreateUserDto } from '../modules/users/dto/createUserDto';
import { AuthService } from './auth.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  Post,
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
import { UserDto } from 'src/modules/users/dto/userDto';
import { LoginDataDto } from './dto/loginDataDto';
import { LoginResponseDto } from './dto/loginResponseDto';

@ApiTags('Authentication')
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
  @HttpCode(200)
  @Post('/register')
  async createAccount(@Body() data: CreateUserDto) {
    const userData = await this.authService.register(data);
    return userData;
  }

  // /login
  @ApiOperation({
    summary: 'Login',
  })
  @ApiExtraModels(LoginResponseDto)
  @ApiResponse({
    status: 200,
    schema: {
      allOf: [
        {
          $ref: getSchemaPath(LoginResponseDto),
        },
      ],
    },
  })
  @HttpCode(200)
  @Post('/login')
  async login(@Body() data: LoginDataDto) {
    const loginData = await this.authService.login(data);
    return loginData;
  }
}
