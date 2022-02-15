import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/styles/theme';
import { InvestmentDetail } from '../src/pages/InvestmentDetail';
import { NavigationContainer } from '@react-navigation/native';
import { InvestmentParamList } from '../src/routes/investment.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Investment } from '../src/pages/Investments';
import { currencyFormat } from '../src/utils/formatter';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const INITIAL_INPUT_TEXT = 'R$ 0,00';

const investment: Investment = {
  name: 'Investimento I',
  description: 'Minha aposentadoria',
  total: 20000,
  enabled: true,
  stocks: [
    {
      id: '1',
      name: 'BBAS3',
      percentual: 50,
      value: 10000,
    },
    {
      id: '2',
      name: 'VALE3',
      percentual: 50,
      value: 10000,
    },
  ],
};

const { Navigator, Screen } = createNativeStackNavigator<InvestmentParamList>();

const Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Resgate"
            component={InvestmentDetail}
            initialParams={{ investment: investment }}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

describe('testing screen', () => {
  test('should be render', () => {
    expect(render(<Component />)).toBeTruthy();
  });
  test('total balance should be the sum of the value of stocks', () => {
    const { getByText } = render(<Component />);
    expect(
      getByText(currencyFormat(investment.stocks.reduce((a, { value: b }) => a + b, 0))),
    ).toBeTruthy();
  });
});

describe('testing inputs', () => {
  test('should render two inputs', () => {
    const { getAllByDisplayValue } = render(<Component />);
    const inputs = getAllByDisplayValue(INITIAL_INPUT_TEXT);
    expect(inputs).toHaveLength(2);
  });
  test('should apply mask', () => {
    const { getAllByDisplayValue } = render(<Component />);
    const input = getAllByDisplayValue(INITIAL_INPUT_TEXT)[0];
    fireEvent(input, 'onChangeText', '0');
    expect(input.props.value).toEqual(INITIAL_INPUT_TEXT);
  });
  test('should only accept numbers', () => {
    const { getAllByDisplayValue } = render(<Component />);
    const input = getAllByDisplayValue(INITIAL_INPUT_TEXT)[0];
    fireEvent(input, 'onChangeText', `${INITIAL_INPUT_TEXT}abc`);
    expect(input.props.value).toEqual(INITIAL_INPUT_TEXT);
  });
  test('should not be greater than the stock value', () => {
    const { getAllByDisplayValue, getByText } = render(<Component />);
    const input = getAllByDisplayValue(INITIAL_INPUT_TEXT)[0];
    fireEvent(input, 'onChangeText', `R$ 11.000,00`);
    expect(
      getByText(`Valor não pode ser maior que ${currencyFormat(investment.stocks[0].value)}`),
    ).toBeTruthy();
  });
});

describe('testing modal', () => {
  test('should display modal without errors when button is pressed', () => {
    const { getAllByDisplayValue, getByText } = render(<Component />);
    const button = getByText('Confirmar Resgate');
    fireEvent(button, 'onPress');
    expect(getByText('Resgate Efetuado!')).toBeTruthy();
  });
  test('should display all errors in modal when button is pressed', () => {
    const { getAllByDisplayValue, getByText } = render(<Component />);
    const inputs = getAllByDisplayValue(INITIAL_INPUT_TEXT);
    inputs.forEach(input => {
      fireEvent(input, 'onChangeText', `R$ 11.000,00`);
    });
    const button = getByText('Confirmar Resgate');
    fireEvent(button, 'onPress');
    expect([
      getByText(
        `${investment.stocks[0].name}: Valor máximo de ${currencyFormat(
          investment.stocks[0].value,
        )}`,
        { exact: false },
      ),
      getByText(
        `${investment.stocks[1].name}: Valor máximo de ${currencyFormat(
          investment.stocks[1].value,
        )}`,
        { exact: false },
      ),
    ]).toBeTruthy();
  });
});
