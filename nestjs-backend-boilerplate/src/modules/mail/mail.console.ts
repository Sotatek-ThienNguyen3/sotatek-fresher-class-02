import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';
import { mailConfig } from 'src/configs/mail.config';
import { MailProcessor } from 'src/modules/mail/mail.processor';
import { MailService } from 'src/modules/mail/mail.service';

@Console()
@Injectable()
export class MailConsole {
  constructor(
    private mailerService: MailerService,
    private readonly mailService: MailService,
    private readonly logger: Logger,
  ) {
    this.logger.setContext(MailConsole.name);
  }

  @Command({
    command: 'email:send <email> <subject> <body>',
    description: 'Send test email',
  })
  async sendMail(email: string, subject: string, body: string): Promise<void> {
    await this.mailerService.sendMail({
      from: mailConfig.from,
      to: email,
      subject: subject,
      template: 'src/modules/mail/templates/test-email.hbs',
      context: {
        email: email,
        content: body,
        bannerLink: MailProcessor.MAIL_BANNER_LINK,
      },
    });
  }

  @Command({
    command: 'email:send-via-queue <email> <subject> <body>',
    description: 'Send test email via queue',
  })
  async sendMailViaQueue(email: string, subject: string, body: string): Promise<void> {
    await this.mailService.sendTestEmail(email, subject, body);
  }
}
