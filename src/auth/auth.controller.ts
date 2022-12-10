import { CreateUserDto } from './../users/dto/createUserDto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Create account',
  })
  @Post('/register')
  createAccount(@Body() data: CreateUserDto): Promise<any> {
    return this.authService.register(data);
  }
}
