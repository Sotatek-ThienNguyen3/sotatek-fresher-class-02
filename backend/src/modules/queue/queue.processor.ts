import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { QUEUE_NAME, QUEUE_TOPIC } from 'src/modules/queue/queue.enum';

@Processor(QUEUE_NAME.EMAIL)
export class QueueProcessor {
  @Process(QUEUE_TOPIC.EMAIL_SEND)
  async processMail(jobData: Job) {
    console.log('Receive data from queue');
    console.log('job data', jobData.data);
    // processing
    console.log('Done process data from queue');
    return;
  }
}
