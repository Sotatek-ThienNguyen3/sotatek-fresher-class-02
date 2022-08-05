import { PartialType } from '@nestjs/swagger';
import { UserEntity } from 'src/models/entities/user.entity';

export class ResponseLogin extends PartialType(UserEntity) {
  accessToken: string;
  refreshToken: string;
}
