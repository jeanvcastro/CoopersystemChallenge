import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Investment, Investments } from '../pages/Investments';
import { InvestmentDetail } from '../pages/InvestmentDetail';
import theme from '../styles/theme';

export type InvestmentParamList = {
  Investimentos: undefined;
  Resgate: {
    investment: Investment;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<InvestmentParamList>();

const InvestmentsRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        animation: 'slide_from_left',
        headerBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.primary,
              borderBottomColor: theme.colors.secondary,
              borderBottomWidth: 2,
            }}
          />
        ),
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Screen name="Investimentos" component={Investments} />
      <Screen name="Resgate" component={InvestmentDetail} />
    </Navigator>
  );
};

export default InvestmentsRoutes;
