import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Label = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`;

export const ListItemContainer = styled(View)<{ disabled: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 1px;
  background-color: #ffffff;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const Name = styled(StyledText)`
  text-transform: uppercase;
`;
