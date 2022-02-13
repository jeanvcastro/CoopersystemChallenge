import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TextButton = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
