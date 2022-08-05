import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getConfig } from 'src/configs';

export interface Response<T> {
  data: T;
  metadata: Record<string, unknown>;
}
@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((_data) => {
        // @Exclude sensitive data
        const data = classToPlain(_data);
        const req = context.switchToHttp().getRequest();

        const metadata = {
          ...data.metadata,
        };
        metadata.apiName = getConfig().get<string>('app.name');
        metadata.apiVersion = getConfig().get<string>('app.prefix');
        metadata.timestamp = new Date();

        if (data?.data?.length || data?.length) {
          metadata.length = data?.data?.length || data?.length;
        }
        if (req.query) {
          metadata.query = { ...req.query };
        }

        delete data.metadata;
        return {
          code: HttpStatus.OK,
          data: data.data || data,
          metadata: metadata,
        };
      }),
    );
  }
}
