import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from '../../api/auth/services/auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    let req = context.switchToHttp().getRequest<Request>();
    let token = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedException(`authorization required in header`);
    }
    let user = await this.authService.authenticate(token);
    if (!user) {
      return false;
    }
    req.user = user;
    return true;
  }
}
