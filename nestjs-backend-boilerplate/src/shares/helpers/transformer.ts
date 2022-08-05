import { TransformationType } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';

export const dateTransformer = ({ value, type }: TransformFnParams): unknown => {
  if (!value) {
    return;
  }

  if (type === TransformationType.CLASS_TO_PLAIN) {
    return value.getTime();
  } else {
    return new Date(value);
  }
};
