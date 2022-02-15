import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Card, { CardRow } from '../../components/Card';
import { Container, Title } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { InvestmentParamList } from '../../routes/investment.routes';
import { Investment, Stock } from '../Investments';
import { currencyFormat, stringToFloat } from '../../utils/formatter';

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

const InvestmentDetail = () => {
  const route = useRoute<RouteProp<InvestmentParamList>>();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState(modalPropsSuccess);

  const [investment, setInvestment] = useState<Investment | undefined>(undefined);
  const [total, setTotal] = useState('');
  const [currentStockValues, setCurrentStockValues] = useState<{ [id: string]: number }>({});
  const [errors, setErrors] = useState<{ [id: string]: string }>({});
  const [redemptionValue, setRedemptionValue] = useState('');

  useEffect(() => {
    if (route.params?.investment) {
      const investmentData = route.params.investment;
      setInvestment(investmentData);
      setTotal(
        currencyFormat(
          investmentData.stocks.reduce((previous, { value: current }) => previous + current, 0),
        ),
      );
    }
  }, []);

  const handlePress = () => {
    Math.random() < 0.5 ? setModalProps(modalPropsSuccess) : setModalProps(modalPropsError);
    setModalVisible(!modalVisible);
  };

  const validate = () => {
    investment?.stocks.map(stock => {
      if (currentStockValues[stock.id]) {
        if (currentStockValues[stock.id] > stock.value) {
          errors[stock.id] = `${stock.name}: Valor máximo de ${currencyFormat(stock.value)}`;
        } else {
          errors[stock.id] = '';
        }
        setErrors(errors);
      }
    });
  };

  const handleChangeText = (text: string, stock: Stock) => {
    currentStockValues[stock.id] = stringToFloat(text);
    setCurrentStockValues(currentStockValues);
    setRedemptionValue(
      currencyFormat(
        Object.values(currentStockValues).reduce((previous, current) => previous + current, 0),
      ),
    );
    validate();
  };

  return (
    <Container>
      <ScrollView>
        <Title>Dados do Investimento</Title>
        <Card>
          <CardRow label="Nome" value="INVESTIMENTO III" />
          <CardRow label="Saldo total disponível" value={total} border={false} />
        </Card>
        <Title>Resgate do seu jeito</Title>
        {investment?.stocks.map(stock => (
          <Card key={stock.id}>
            <CardRow label="Ação" value={stock.name} />
            <CardRow label="Saldo acumulado" value={currencyFormat(stock.value)} />
            <Input
              placeholder="Valor a resgatar"
              value="R$ 0,00"
              type="currency"
              onChangeText={text => handleChangeText(text, stock)}
              error={errors[stock.id]}
            />
          </Card>
        ))}
        <Card>
          <CardRow label="Valor total a resgatar" value={redemptionValue} border={false} />
        </Card>
      </ScrollView>
      <Button onPress={handlePress}>Confirmar Resgate</Button>
      <Modal visible={modalVisible} onPress={() => setModalVisible(false)} {...modalProps} />
    </Container>
  );
};

export default InvestmentDetail;
