import styled from 'styled-components/native';
import Button from '../Button';

export const Backdrop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  width: 90%;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Message = styled.Text`
  padding: 20px 30px 20px 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ModalButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
`;
