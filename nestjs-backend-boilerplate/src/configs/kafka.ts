import { Kafka } from 'kafkajs';
import { getConfig } from 'src/configs/index';

export const KAFKA_CONFIG = {
  brokers: getConfig().get<string>('kafka.brokers'),
};

export const kafka = new Kafka({
  clientId: 'sota-dex',
  brokers: KAFKA_CONFIG.brokers.split(','),
});
