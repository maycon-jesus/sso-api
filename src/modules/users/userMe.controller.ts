import { UsersService } from 'src/modules/users/users.service';
import { ApiTags, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { UserDto } from './dto/userDto';

@ApiTags('/users/me')
@ApiResponse({
  status: 401,
})
@UseInterceptors(ClassSerializerInterceptor)
@Controller('/users/me')
export class UsersMeController {
  constructor(private userService: UsersService) {}

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
  @Get()
  async getMe(@Req() req: Request) {
    const user = await this.userService.getById(req.session.userId);
    return user;
  }
}
