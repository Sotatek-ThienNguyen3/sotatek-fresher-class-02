import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as morgan from 'morgan';
import { getConfig } from 'src/configs';

const env = getConfig().get<string>('app.node_env');

function jsonFormat(_tokens, req: Request, res: Response): string {
  const logInfo = {
    req: {
      url: req.url,
      method: req.method,
      body: req.body,
      query: req.query,
      params: req.params,
    },
    res: {
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,
    },
  };
  return JSON.stringify(logInfo);
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {
    this.logger.setContext('LoggerMiddleware');
  }

  // eslint-disable-next-line
  use(req: Request, res: Response, next: (err?: Error) => void) {
    return morgan(jsonFormat, {
      stream: {
        write: (_logInfo) => {
          const logInfo = JSON.parse(_logInfo);
          if (env != 'develop') {
            console.log(logInfo);
          }
        },
      },
    })(req, res, next);
  }
}
