import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { currencyFormat } from '../../utils/formatter';
import { HelperText, StyledInput } from './styles';

export type InputProps = TextInputProps & {
  type: 'currency' | 'text';
  error: string;
};

export function Input(props: InputProps) {
  const [text, setText] = useState(props.value);

  const handleChangeText = (text: string) => {
    if (props.type === 'currency') text = currencyFormat(text);
    setText(text);
    if (props.onChangeText) props.onChangeText(text);
  };

  return (
    <View>
      <StyledInput
        onChangeText={handleChangeText}
        keyboardType={props.type === 'currency' ? 'numeric' : 'default'}
        value={text}
      />
      <HelperText>{props.error}</HelperText>
    </View>
  );
}

Input.defaultProps = {
  type: 'text',
  error: '',
};
