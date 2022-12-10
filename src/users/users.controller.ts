import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/userDto';

@ApiTags('Users')
@ApiExtraModels(UserDto)
@Controller()
export class UsersController {}
