import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

type ButtonProps = TouchableOpacityProps & {
  children: string;
};

export function Button(props: ButtonProps) {
  return (
    <Container {...props} activeOpacity={0.8}>
      <TextButton>{props.children}</TextButton>
    </Container>
  );
}
