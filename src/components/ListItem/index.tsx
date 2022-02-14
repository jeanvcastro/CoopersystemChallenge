import React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { numberFormat } from '../../utils/formatter';
import { Container, Name, StyledText } from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
  description: string;
  value: number;
}

const ListItem = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Container>
        <View>
          <Name>{props.name}</Name>
          <Text>{props.description}</Text>
        </View>
        <StyledText>{numberFormat(props.value)}</StyledText>
      </Container>
    </TouchableOpacity>
  );
};

export default ListItem;
