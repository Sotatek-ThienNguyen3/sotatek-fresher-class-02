import * as config from 'config';
import { Logger } from '@nestjs/common';
import { getConfig } from 'src/configs';
import { sleep } from 'src/shares/helpers/utils';

const BLOCK_CONFIRM = getConfig().get<number>('dex.block_confirm');
const BLOCK_STEP = 5000;
const START_BLOCK = Number(config.get<number>('dex.start_block'));
const BLOCK_TIME = Number(config.get<number>('dex.block_time_in_ms'));

export async function crawlEvents(
  startBlock: number,
  provider,
  contract,
  queryTopics: string[],
  callback: (events, block) => void,
): Promise<void> {
  const logger = new Logger();

  let cursor = startBlock || START_BLOCK;

  while (true) {
    const to = Math.min(cursor + BLOCK_STEP, (await provider.getBlockNumber()) - BLOCK_CONFIRM);
    if (cursor + 1 > to) {
      await sleep(BLOCK_TIME);
      continue;
    }

    const events = await contract.queryFilter(
      {
        address: contract.address,
        topics: queryTopics,
      },
      cursor + 1,
      to,
    );

    logger.log(`Crawled from ${cursor + 1} to ${to}, got ${events.length} events.`);
    cursor = to;
    await callback(events, to);
    if (events.length === 0) {
      await sleep(BLOCK_TIME);
    }
  }
}
