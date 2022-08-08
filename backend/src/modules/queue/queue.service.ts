import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { QUEUE_NAME, QUEUE_TOPIC } from 'src/modules/queue/queue.enum';

@Injectable()
export class QueueService {
  constructor(@InjectQueue(QUEUE_NAME.EMAIL) private queueEmail: Queue) {}

  async sendMailToQueue() {
    console.log('Start send data to queue');
    await this.queueEmail.add(QUEUE_TOPIC.EMAIL_SEND, {
      A: 1,
      B: 2,
    });
    console.log('Done send data to queue');
  }
}
