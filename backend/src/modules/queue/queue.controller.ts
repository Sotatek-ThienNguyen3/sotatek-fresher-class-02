import { Controller, Get, Inject } from '@nestjs/common';
import { QueueService } from 'src/modules/queue/queue.service';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}
  @Get('/send-test-mail')
  async sendTestMail() {
    await this.queueService.sendMailToQueue();
  }
}
