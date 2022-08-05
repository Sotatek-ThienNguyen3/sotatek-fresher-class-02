import { Global, Module } from '@nestjs/common';
import { KafkaClient } from 'src/shares/kafka-client/kafka-client';

@Global()
@Module({
  providers: [KafkaClient],
  exports: [KafkaClient],
})
export class KafkaModule {}
