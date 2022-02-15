import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import theme from '../../styles/theme';
import { Container } from './styles';

const Load = (props: ActivityIndicatorProps) => {
  return (
    <Container>
      <ActivityIndicator color={theme.colors.secondary} {...props} />
    </Container>
  );
};

Load.defaultProps = {
  size: 'large',
};

export default Load;
