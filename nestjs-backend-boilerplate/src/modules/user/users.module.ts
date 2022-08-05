import { Logger, Module } from '@nestjs/common';
import { UserController } from 'src/modules/user/users.controller';
import { UserService } from 'src/modules/user/users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/modules/auth/auth.constants';
import { MailModule } from 'src/modules/mail/mail.module';

@Module({
  imports: [
    Logger,
    JwtModule.register({
      secret: jwtConstants.accessTokenSecret,
      signOptions: { expiresIn: jwtConstants.accessTokenExpiry },
    }),
    MailModule,
  ],
  providers: [UserService, Logger],
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
