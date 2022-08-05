import { Module } from '@nestjs/common';
import { EventGateway } from 'src/modules/events/event.gateway';

@Module({
  providers: [EventGateway],
})
export class EventModule {}
