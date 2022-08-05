// eslint-disable-next-line @typescript-eslint/no-var-requires
const lodash = require('lodash');

export interface AuthMessage {
  timestamp: number;
  method: string | undefined;
  url: string | undefined;
  data: unknown;
  query: unknown;
}
export const serializeMessage = (message: AuthMessage): string => {
  return JSON.stringify(
    lodash.cloneDeepWith(message, (value: unknown) => {
      return !lodash.isPlainObject(value) ? lodash.toString(value) : undefined;
    }),
  );
};
