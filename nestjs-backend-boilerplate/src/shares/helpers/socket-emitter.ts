import { Logger } from '@nestjs/common';
import { Emitter } from '@socket.io/redis-emitter';
import { createClient } from 'redis';
import { redisConfig } from 'src/configs/redis.config';

export class SocketEmitter {
  private static instance: SocketEmitter;
  public io;
  private logger: Logger;

  private constructor() {
    const redisClient = createClient(redisConfig.port, redisConfig.host);
    this.io = new Emitter(redisClient);
    this.logger = new Logger(SocketEmitter.name);
  }

  public static getInstance(): SocketEmitter {
    if (!SocketEmitter.instance) {
      SocketEmitter.instance = new SocketEmitter();
    }
    return SocketEmitter.instance;
  }

  public emitNotifications(notifications: Notification[], userId: number): void {
    this.io.to(`${userId}`).emit(`notifications`, notifications);
  }
}
