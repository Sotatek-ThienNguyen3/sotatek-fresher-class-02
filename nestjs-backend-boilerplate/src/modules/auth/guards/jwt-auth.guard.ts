import { ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import jwtDecode from 'jwt-decode';
import { JwtPayload } from 'src/modules/auth/strategies/jwt.payload';
import { httpErrors } from 'src/shares/exceptions';

// const signatureIgnore = config.get<boolean>('app.signature_ignore');

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const superResult = await super.canActivate(context);
    if (!superResult) {
      return false;
    }
    try {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization;
      const payload: JwtPayload = jwtDecode(token);
      console.log('payload', payload);
      return true;
    } catch (e) {
      throw new HttpException(httpErrors.UNAUTHORIZED, HttpStatus.BAD_REQUEST);
    }
  }
}
