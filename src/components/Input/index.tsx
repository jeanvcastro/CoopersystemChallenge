import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { HelperText, StyledInput } from './styles';

interface Props extends TextInputProps {
  type: 'money' | 'text';
  error: string;
}

const formatMoney = (text: string) => {
  return (
    'R$ ' + (text ? parseFloat(text.replace(/\D/g, '')) / 100 : 0).toFixed(2).replace('.', ',')
  );
};

const Input = (props: Props) => {
  const [text, setText] = useState(props.value);
  const [focused, setFocused] = useState(false);

  const handleChangeText = (text: string) => {
    setText(props.type === 'money' ? formatMoney(text) : text);
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
        keyboardType={props.type === 'money' ? 'numeric' : 'default'}
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
