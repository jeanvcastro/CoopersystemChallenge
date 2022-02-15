import React from 'react';
import { Modal as RNModal, ModalProps as RNModalProps } from 'react-native';
import { Backdrop, Message, ModalView, ModalButton, Title } from './styles';

type ModalProps = RNModalProps & {
  title?: string;
  message?: string;
  buttonText?: string;
  onPress?: () => void;
};

export function Modal(props: ModalProps) {
  return (
    <RNModal {...props}>
      <Backdrop>
        <ModalView>
          <Title>{props.title}</Title>
          <Message>{props.message}</Message>
          <ModalButton onPress={props.onPress}>{props.buttonText || ''}</ModalButton>
        </ModalView>
      </Backdrop>
    </RNModal>
  );
}

Modal.defaultProps = {
  animationType: 'fade',
  transparent: true,
};
