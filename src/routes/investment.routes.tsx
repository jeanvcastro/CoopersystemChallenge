import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InvestmentDetail from '../pages/InvestmentDetail';
import Investment from '../pages/Investment';
import theme from '../styles/theme';
import { View } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

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
      <Screen name="Investimentos" component={Investment} />
      <Screen name="Resgate" component={InvestmentDetail} />
    </Navigator>
  );
};

export default InvestmentsRoutes;
