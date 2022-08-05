import { Injectable } from '@nestjs/common';
import { serialize } from 'class-transformer';
import { Consumer, EachMessagePayload, Producer, RecordMetadata } from 'kafkajs';
import { kafka } from 'src/configs/kafka';

@Injectable()
export class KafkaClient {
  private producer: Producer;

  constructor() {
    this.producer = kafka.producer();
  }

  /**
   *
   * @param topic Name of the topic to send message to
   * @param data Data to send to Kafka, will be jsonify to JSON string
   * @returns
   */
  async send<T>(topic: string, data: T): Promise<RecordMetadata[]> {
    await this.producer.connect();
    const result: RecordMetadata[] = await this.producer.send({
      topic: topic,
      messages: [
        {
          value: serialize(data),
        },
      ],
    });
    await this.producer.disconnect();
    return result;
  }

  /**
   *
   * @param topic Name of topic to create consumer
   * @param groupId Group id of consumer
   * @param callback Callback to handle each data message
   * @param options Options for consumer
   */
  async consume<T>(topic: string, groupId: string, callback: (data: T) => Promise<void>, options = {}): Promise<void> {
    const consumer: Consumer = kafka.consumer({
      groupId: groupId,
    });
    await consumer.connect();
    await consumer.subscribe({
      topic: topic,
      fromBeginning: false,
      ...options,
    });
    await consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        await callback(JSON.parse(payload.message.value.toString()));
      },
    });
  }

  /**
   *
   * @param topics Name of the topics to delete
   * @returns
   */
  async delete(topics: string[]): Promise<void> {
    const admin = kafka.admin();
    await admin.connect();
    const currentTopics = await admin.listTopics();
    const existedTopic = topics.filter((topic) => currentTopics.includes(topic));
    await admin.deleteTopics({ topics: existedTopic });
    await admin.disconnect();
  }

  async getCombinedLag(topic: string, groupId: string): Promise<number> {
    const admin = kafka.admin();
    await admin.connect();

    const currentTopics = await admin.listTopics();
    if (!currentTopics.includes(topic)) {
      return 0;
    }

    const topicOffsets = this.convertOffsetsToMap(await admin.fetchTopicOffsets(topic));
    const consumerOffsets = this.convertOffsetsToMap(await admin.fetchOffsets({ groupId, topic }));

    let combinedLag = 0;
    for (const partition in topicOffsets) {
      combinedLag += topicOffsets[partition] - consumerOffsets[partition];
    }

    await admin.disconnect();

    return combinedLag;
  }

  private convertOffsetsToMap(offsets: { partition: number; offset: string }[]): { [key: string]: number } {
    const map = {};
    for (const offset of offsets) {
      map[offset.partition] = Math.max(Number(offset.offset), 0);
    }
    return map;
  }
}
