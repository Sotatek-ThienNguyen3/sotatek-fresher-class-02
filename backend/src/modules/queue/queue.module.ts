import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueController } from 'src/modules/queue/queue.controller';
import { QUEUE_NAME } from 'src/modules/queue/queue.enum';
import { QueueProcessor } from 'src/modules/queue/queue.processor';
import { QueueService } from 'src/modules/queue/queue.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QUEUE_NAME.EMAIL,
    }),
  ],
  exports: [],
  providers: [QueueService, QueueProcessor],
  controllers: [QueueController],
})
export class QueueModule {}
