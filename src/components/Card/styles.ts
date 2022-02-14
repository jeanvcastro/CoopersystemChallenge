import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #ffffff;
`;

export const Row = styled.View<{ border: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0 10px 0;
  ${({ border }) => border && `border-bottom-width: 2px; border-bottom-color: #f6f6f6;`}
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #000000;
`;

export const Value = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`;
