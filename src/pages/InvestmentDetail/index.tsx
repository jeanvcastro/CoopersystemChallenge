import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Card, { CardRow } from '../../components/Card';
import { Container, Title } from './styles';

const InvestmentDetail = () => {
  const modalPropsSuccess = {
    title: 'Resgate Efetuado!',
    message: 'O valor solicitado estará em sua conta em até 5 dias úteis!',
    buttonText: 'Novo Resgate',
    transparent: false,
  };

  const modalPropsError = {
    title: 'Dados Inválidos',
    message: `Você preencheu um ou mais campos com valor acima do permitido:\n\nBBAS3: Valor máximo de R$ 11.049,28\nVALE3: Valor máximo de R$ 8.143,44`,
    buttonText: 'Corrigir',
    transparent: true,
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState(modalPropsSuccess);

  const handleOnPress = () => {
    Math.random() < 0.5 ? setModalProps(modalPropsSuccess) : setModalProps(modalPropsError);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <ScrollView>
        <Title>Dados do Investimento</Title>
        <Card>
          <CardRow label="Nome" value="INVESTIMENTO III" />
          <CardRow label="Saldo total disponível" value="R$ 75.000,00" border={false} />
        </Card>
        <Title>Resgate do seu jeito</Title>
        {[...Array(5)].map((x, i) => (
          <Card key={i}>
            <CardRow label="Ação" value="BBSA3" />
            <CardRow label="Saldo acumulado" value="R$ 40.000,00" />
            <Input placeholder="Valor a resgatar" value="R$ 0,00" type="currency" />
          </Card>
        ))}
        <Card>
          <CardRow label="Valor total a resgatar" value="R$ 19.000,00" border={false} />
        </Card>
      </ScrollView>
      <Button onPress={handleOnPress}>Confirmar Resgate</Button>
      <Modal visible={modalVisible} onPress={() => setModalVisible(false)} {...modalProps} />
    </Container>
  );
};

export default InvestmentDetail;
