import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/entities/user.entity';
import { PhotoModule } from 'src/modules/photo/photo.module';
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
  UserModule,
  PhotoModule,
];
