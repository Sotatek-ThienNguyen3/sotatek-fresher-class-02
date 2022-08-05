import { MailerService } from '@nestjs-modules/mailer';
import { Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { getConfig } from 'src/configs';
import { UserService } from 'src/modules/user/users.service';

@Processor('mail')
export class MailProcessor {
  public static MAIL_BANNER_LINK = `${getConfig().get<string>('mail.domain')}banner.png`;

  constructor(
    private readonly mailerService: MailerService,
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {}

}
