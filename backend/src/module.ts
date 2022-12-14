import { BullModule } from '@nestjs/bull';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/entities/user.entity';
import { PhotoModule } from 'src/modules/photo/photo.module';
import { QueueModule } from 'src/modules/queue/queue.module';
import { UserModule } from 'src/modules/user/user.module';

export const Modules = [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: 'fresherk2',
    entities: [UserEntity],
    synchronize: true,
  }),
  BullModule.forRoot({
    redis: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
    },
  }),
  UserModule,
  PhotoModule,
  QueueModule,
];
