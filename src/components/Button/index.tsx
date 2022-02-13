import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface Props extends TouchableOpacityProps {
  children: string;
}

const Button = (props: Props) => {
  return (
    <Container {...props} activeOpacity={0.8}>
      <TextButton>{props.children}</TextButton>
    </Container>
  );
};

export default Button;
