import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  margin: 15px 15px 5px 15px;
  text-transform: uppercase;
  font-weight: bold;
  color: #707070;
`;
