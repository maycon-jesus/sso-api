import { UserDto } from 'src/users/dto/userDto';

declare module 'express-session' {
  interface SessionData {
    user: UserDto;
    userId: number;
  }
}
