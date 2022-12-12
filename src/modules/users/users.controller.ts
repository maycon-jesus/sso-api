import { Controller, Get, Req } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UserDto } from './dto/userDto';

@ApiTags('Users')
@ApiExtraModels(UserDto)
@ApiResponse({
  status: 401,
})
@Controller('/users')
export class UsersController {}
