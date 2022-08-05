import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRole } from 'src/shares/enums/user.enum';
import { httpErrors } from 'src/shares/exceptions';

@Injectable()
export class OnlyAdmin implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const role = context.switchToHttp().getRequest()?.user?.role;
    if (role == UserRole.ADMIN) return true;
    else throw new HttpException(httpErrors.FORBIDDEN, HttpStatus.FORBIDDEN);
  }
}

@Injectable()
export class OnlySuperAdmin implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const role = context.switchToHttp().getRequest()?.user?.role;
    if (role == UserRole.SUPER_ADMIN) return true;
    else throw new HttpException(httpErrors.FORBIDDEN, HttpStatus.FORBIDDEN);
  }
}

@Injectable()
export class AdminAndSuperAdmin implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const role = context.switchToHttp().getRequest()?.user?.role;
    if (role == UserRole.ADMIN || role == UserRole.SUPER_ADMIN) return true;
    else throw new HttpException(httpErrors.FORBIDDEN, HttpStatus.FORBIDDEN);
  }
}
