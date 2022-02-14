import React from 'react';
import { ViewProps } from 'react-native';
import { Container, Row, Label, Value } from './styles';

interface CardProps extends ViewProps {}

const Card = (props: CardProps) => {
  return <Container>{props.children}</Container>;
};

interface CardRowProps {
  label: string;
  value: string;
  border: boolean;
}

export const CardRow = (props: CardRowProps) => {
  return (
    <Row border={props.border}>
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Row>
  );
};

CardRow.defaultProps = {
  border: true,
};

export default Card;
