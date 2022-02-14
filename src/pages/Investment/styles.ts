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
