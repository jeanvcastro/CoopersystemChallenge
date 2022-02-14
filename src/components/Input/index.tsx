import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { currencyFormat } from '../../utils/formatter';
import { HelperText, StyledInput } from './styles';

interface Props extends TextInputProps {
  type: 'currency' | 'text';
  error: string;
}

const Input = (props: Props) => {
  const [text, setText] = useState(props.value);
  const [focused, setFocused] = useState(false);

  const handleChangeText = (text: string) => {
    setText(props.type === 'currency' ? currencyFormat(text) : text);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View>
      <StyledInput
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={props.type === 'currency' ? 'numeric' : 'default'}
        value={text}
      />
      <HelperText>{props.error && !focused ? props.error : ''}</HelperText>
    </View>
  );
};

Input.defaultProps = {
  type: 'text',
  error: '',
};

export default Input;
