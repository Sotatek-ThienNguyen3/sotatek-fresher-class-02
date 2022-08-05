export const formatNumber = (number: string | undefined, precision: number, zeroValue: string): string => {
  if (number === undefined || number === null || number === '' || Number(number) == NaN) {
    return zeroValue;
  }
  return Number(number)
    .toFixed(precision)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

