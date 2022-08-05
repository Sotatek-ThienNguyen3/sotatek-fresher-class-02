/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';
import { redisConfig } from 'src/configs/redis.config';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: unknown): unknown {
    const server = super.createIOServer(port, options);
    const redisAdapter = redisIoAdapter({ host: redisConfig.host, port: redisConfig.port });

    server.adapter(redisAdapter);
    return server;
  }
}
