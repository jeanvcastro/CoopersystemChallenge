import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InvestmentsRoutes from './investment.routes';
import { StatusBar } from 'react-native';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components/native';

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor={theme.colors.primary} />
        <InvestmentsRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
