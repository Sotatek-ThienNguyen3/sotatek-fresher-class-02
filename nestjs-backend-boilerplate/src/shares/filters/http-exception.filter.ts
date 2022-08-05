import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  async catch(exception: HttpException, host: ArgumentsHost): Promise<void> {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { code, message, ...rest }: any = exception.getResponse();

    console.log(`exception.getResponse()`, exception.getResponse());

    response.status(status).json({
      code: code || 'SOTADEX_00000',
      statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
      info: {
        message: message || 'Unknown errors',
        ...rest,
      },
      path: request.url,
    });
  }
}
