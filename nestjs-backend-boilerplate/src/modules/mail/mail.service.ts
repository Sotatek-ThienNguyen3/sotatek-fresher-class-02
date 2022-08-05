import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { getConfig } from 'src/configs';
import { TestMailDto } from 'src/modules/mail/dto/test-mail.dto';

@Injectable()
export class MailService {
  public static MAIL_DOMAIN = getConfig().get<string>('mail.domain');
  public static MAIL_PREFIX = 'MAIL_CACHE_';
  public static MAIL_TTL = 1800; // 30 minutes

  public static WAIT_PREFIX = 'MAIL_WAIT_';
  public static WAIT_TTL = 60; // 1 minutes

  constructor(
    @InjectQueue('mail') private readonly emailQueue: Queue,
  ) { }

  async sendTestEmail(email: string, subject: string, content: string): Promise<void> {
    const testMailDto: TestMailDto = { email, subject, content };
    await this.emailQueue.add('sendTestMail', {
      ...testMailDto,
    });
  }

}
