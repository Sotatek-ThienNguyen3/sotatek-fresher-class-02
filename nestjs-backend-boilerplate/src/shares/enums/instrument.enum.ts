import { enumize } from 'src/shares/enums/enumize';

export const InstrumentTypes = enumize();

export const InstrumentDeleverageable = enumize('UNDELEVERAGEABLED', 'DELEVERAGEABLED');

export const InstrumentHasLiquidity = enumize('HAS_LIQUIDITY', 'HAS_NOT_LIQUIDITY');
