import BigNumber from 'bignumber.js';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsPositiveBigNumber(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPositiveBigNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: 'BigNumber string greater than 0',
      },
      validator: {
        validate(value: string, _args: ValidationArguments) {
          return typeof value === 'string' && new BigNumber(value).gt(0);
        },
      },
    });
  };
}
