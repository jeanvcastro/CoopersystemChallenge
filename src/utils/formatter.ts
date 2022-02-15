export const currencyFormat = (num: string | number) => {
  if (typeof num === 'string') {
    num = stringToFloat(num);
  }
  return 'R$ ' + numberFormat(num);
};

export const stringToFloat = (text: string) => {
  const num = text !== '' ? parseFloat(text.replace(/\D/g, '')) : 0;
  return parseFloat((num / 100).toFixed(2));
};

export const numberFormat = (
  number: number,
  decimals = 2,
  decimalSeparator = ',',
  thousandsSeparator = '.',
) => {
  return number
    .toFixed(decimals)
    .replace('.', decimalSeparator)
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
};
