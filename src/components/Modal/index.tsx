import React from 'react';
import { Modal as RNModal, ModalProps } from 'react-native';
import { Backdrop, Message, ModalView, ModalButton, Title } from './styles';

interface Props extends ModalProps {
  title: string;
  message: string;
  buttonText: string;
}

const Modal = (props: Props) => {
  return (
    <RNModal {...props}>
      <Backdrop>
        <ModalView>
          <Title>{props.title}</Title>
          <Message>{props.message}</Message>
          <ModalButton>{props.buttonText}</ModalButton>
        </ModalView>
      </Backdrop>
    </RNModal>
  );
};

Modal.defaultProps = {
  animationType: 'fade',
  transparent: true,
};

export default Modal;
