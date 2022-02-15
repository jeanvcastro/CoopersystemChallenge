import React from 'react';
import { ViewProps } from 'react-native';
import { Container, Row, Label, Value } from './styles';

export function Card(props: ViewProps) {
  return <Container>{props.children}</Container>;
}

type CardRowProps = {
  label: string;
  value: string;
  border: boolean;
};

export function CardRow(props: CardRowProps) {
  return (
    <Row border={props.border}>
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Row>
  );
}
CardRow.defaultProps = {
  border: true,
};
