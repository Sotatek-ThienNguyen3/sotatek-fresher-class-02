export const httpErrors = {
  // user error
  ACCOUNT_NOT_FOUND: {
    message: 'Account not found.',
    code: 'USER_00000',
  },
  ACCOUNT_EXISTED: {
    message: 'Account already existed.',
    code: 'USER_00001',
  },
  ACCOUNT_HASH_NOT_MATCH: {
    message: 'Account adress and hash message are not matched.',
    code: 'USER_00002',
  },
  UNAUTHORIZED: {
    message: 'Unauthorized user.',
    code: 'USER_00003',
  },
  LOCKED_USER: {
    message: 'User has been locked.',
    code: 'USER_00004',
  },
  VERIFY_SIGNATURE_FAIL: {
    message: 'System has been failed to verify signture.',
    code: 'USER_00005',
  },
  REFRESH_TOKEN_EXPIRED: {
    message: 'Refresh tokens is expired.',
    code: 'USER_00006',
  },
  ACCESS_TOKEN_EXPIRED: {
    message: 'Refresh tokens is expired.',
    code: 'USER_00007',
  },
  FORBIDDEN: {
    message: 'You are not authorized to access this resource.',
    code: 'USER_00008',
  },
  USER_EMAIL_EXISTED: {
    message: 'Email has been associted with an other account.',
    code: 'USER_00025',
  },
  USER_EMAIL_VERIFY_FAIL: {
    message: 'Failed to verify this email.',
    code: 'USER_00026',
  },
  EMAIL_CONFIRM_NOT_FOUND: {
    message: 'Email request not found!',
    code: 'USER_00027',
  },
  EMAIL_WAIT_TIME: {
    message: 'Too much request',
    code: 'USER_00028',
  },

  // latest block
  LATEST_BLOCK_EXISTED: {
    message: 'Latest block exist.',
    code: 'LATEST_BLOCK_00001',
  },
  POSITION_NOT_FOUND: {
    message: 'Position not found.',
    code: 'POSITION_00002',
  },

  // order error
  ORDER_NOT_FOUND: {
    message: 'Order not found.',
    code: 'ORDER_00001',
  },
  ORDER_CANCEL_DENIED: {
    message: 'You do not have permission to cancel this order.',
    code: 'ORDER_00002',
  },
  ORDER_ALREADY_CANCELED: {
    message: 'This order have been already canceled and waiting to confirm.',
    code: 'ORDER_00003',
  },
  ORDER_UNKNOWN_VALIDATION_FAIL: {
    message: 'Order validation failed.',
    code: 'ORDER_00004',
  },
  ORDER_PRICE_VALIDATION_FAIL: {
    message: 'Order price validation failed.',
    code: 'ORDER_00005',
  },
  ORDER_TRIGGER_VALIDATION_FAIL: {
    message: 'Order trigger validation failed.',
    code: 'ORDER_00006',
  },
  ORDER_STOP_PRICE_VALIDATION_FAIL: {
    message: 'Order stop price validation failed.',
    code: 'ORDER_00007',
  },
  ORDER_TRAIL_VALUE_VALIDATION_FAIL: {
    message: 'Order trail value validation failed.',
    code: 'ORDER_00008',
  },
  ORDER_MINIMUM_QUANTITY_VALIDATION_FAIL: {
    message: 'Your order size is smaller than the minimum size.',
    code: 'ORDER_00009',
  },
  ORDER_MAXIMUM_QUANTITY_VALIDATION_FAIL: {
    message: 'Your order size is greater than the maximum size.',
    code: 'ORDER_00010',
  },
  ORDER_AVAILABLE_BALANCE_VALIDATION_FAIL: {
    message: 'You have insufficient margin to place this order.',
    code: 'ORDER_00011',
  },
  ORDER_QUANTITY_PRECISION_VALIDATION_FAIL: {
    message: 'Your order quantity precision is not match.',
    code: 'ORDER_00012',
  },
  ORDER_PRICE_PRECISION_VALIDATION_FAIL: {
    message: 'Your order price precision is not match.',
    code: 'ORDER_00013',
  },
  ORDER_STOP_PRICE_PRECISION_VALIDATION_FAIL: {
    message: 'Your order stop price precision is not match.',
    code: 'ORDER_00014',
  },
  ORDER_TRAIL_VALUE_PRECISION_VALIDATION_FAIL: {
    message: 'Your order stop price precision is not match.',
    code: 'ORDER_00015',
  },

  // instrument
  INSTRUMENT_DOES_NOT_EXIST: {
    message: 'Instrument does not exist.',
    code: 'INSTRUMENT_00001',
  },

  // setting
  SETTING_NOT_FOUND: {
    message: 'This setting does not exist.',
    code: 'SETTING_00001',
  },
  SETTING_NOT_VALID: {
    message: 'This setting does not valid.',
    code: 'SETTING_00002',
  },

  // withdraw
  AMOUNT_LT_MINIMUM_WITHDRAWAL: {
    message: 'Amount withdraw must be greater than or equal minumum amount.',
    code: 'WITHDRAWL_00001',
  },
  WITHDRAW_FEE_CHANGED: {
    message: 'Withdrawal fee has been just changed.',
    code: 'WITHDRAWL_00002',
  },

  // api key
  APIKEY_TIMESTAMP_TOO_OLD: {
    message: 'Timestamp is too old.',
    code: 'APIKEY_00001',
  },
};
