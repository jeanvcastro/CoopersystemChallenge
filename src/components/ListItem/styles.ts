import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 1px;
  background-color: #ffffff;
`;

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const Name = styled(StyledText)`
  text-transform: uppercase;
`;
