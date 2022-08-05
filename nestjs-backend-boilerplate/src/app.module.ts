import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';

import Modules from 'src/modules';

import { LoggerMiddleware } from 'src/shares/middlewares/logger.middleware';

@Module({
  imports: [...Modules],
  controllers: [],
  providers: [Logger],
})
export class AppModules {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).exclude('/api/v1/ping').forRoutes('/');
  }
}
