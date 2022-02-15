import { currencyFormat, stringToFloat, numberFormat } from '../src/utils/formatter';

test('should be formatted as currency', () => {
  expect(currencyFormat(3.33)).toBe('R$ 3,33');
});

test('should be converted to number', () => {
  expect(stringToFloat('R$ 3,33')).toBe(3.33);
});

test('should be converted to a formatted string', () => {
  expect(numberFormat(3.33)).toBe('3,33');
});
