import { enumize } from 'src/shares/enums/enumize';

export const KafkaTopics = enumize(
  'orders',
  'trades',
  'matching_engine_preload',
  'matching_engine_input',
  'matching_engine_output',
  'orderbook_output',
  'ticker_engine_preload',
  'ticker_engine_output',
);

export const KafkaGroups = enumize(
  'matching_engine_saver_accounts',
  'matching_engine_saver_positions',
  'matching_engine_saver_orders',
  'matching_engine_saver_trades',
  'matching_engine_saver_transactions',
  'matching_engine_saver_position_histories',
  'matching_engine_saver_funding',
  'matching_engine_saver_margin_histories',
  'matching_engine_notifier',
  'orderbook',
  'ticker',
  'candles',
  'dex_withdrawal',
  'dex_action',
);
