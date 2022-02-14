export const currencyFormat = (text: string) => {
  const number = text ? parseFloat(text.replace(/\D/g, '')) / 100 : 0;
  return 'R$ ' + numberFormat(number);
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
