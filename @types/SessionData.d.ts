import { UserDto } from 'src/modules/users/dto/userDto';

declare module 'express-session' {
  interface SessionData {
    user: UserDto;
    userId: number;
  }
}
