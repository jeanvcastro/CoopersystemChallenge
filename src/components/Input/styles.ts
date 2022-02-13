import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

export const HelperText = styled.Text`
  color: red;
`;
