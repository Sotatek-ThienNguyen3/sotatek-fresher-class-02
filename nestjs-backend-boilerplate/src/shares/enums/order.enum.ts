import { enumize } from 'src/shares/enums/enumize';

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderType {
  LIMIT = 'LIMIT',
  MARKET = 'MARKET',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  FILLED = 'FILLED',
  CANCELED = 'CANCELED',
  UNTRIGGERED = 'UNTRIGGERED',
  REJECTED = 'REJECTED',
}

export enum OrderStopType {
  STOP_LIMIT = 'STOP_LIMIT',
  STOP_MARKET = 'STOP_MARKET',
  TRAILING_STOP = 'TRAILING_STOP',
  TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',
  TAKE_PROFIT_MARKET = 'TAKE_PROFIT_MARKET',
}

export const OrderStopCondition = enumize();

export enum OrderTimeInForce {
  GTC = 'GTC',
  IOC = 'IOC',
  FOK = 'FOK',
}

export const OrderPairType = enumize();

export enum OrderTrigger {
  LAST = 'LAST',
  INDEX = 'INDEX',
  ORACLE = 'ORACLE',
}

export enum OrderNote {
  LIQUIDATION = 'LIQUIDATION',
  INSURANCE_LIQUIDATION = 'INSURANCE_LIQUIDATION',
  INSURANCE_FUNDING = 'INSURANCE_FUNDING',
  REDUCE_ONLY_CANCELED = 'REDUCE_ONLY_CANCELED',
}
