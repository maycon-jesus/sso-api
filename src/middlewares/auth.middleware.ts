import { AuthService } from './../auth/auth.service';
import {
  NestMiddleware,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: (error?: any) => void) {
    const authorization = req.headers.authorization;

    if (!authorization) throw new UnauthorizedException();
    if (req.session.user) return next();
    const tokenPayload = await this.authService.getJwtTokenPayload(
      authorization,
    );
    req.session.userId = tokenPayload.userId;
    const userData = await this.usersService.getById(tokenPayload.userId);
    req.session.user = userData;
    next();
  }
}
