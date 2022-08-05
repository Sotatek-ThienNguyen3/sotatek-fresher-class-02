import * as config from 'config';

export const jwtConstants = {
  accessTokenSecret: config.get<string>('app.jwt_access_token_secret'),
  accessTokenExpiry: parseInt(config.get<string>('app.jwt_access_token_expiration_time')),
  refreshTokenExpiry: parseInt(config.get<string>('app.jwt_refresh_token_expiration_time')),
};

export const AUTH_CACHE_PREFIX = 'AUTH_CACHE_PREFIX_';
