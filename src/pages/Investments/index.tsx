import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Load from '../../components/Load';
import { InvestmentParamList } from '../../routes/investment.routes';
import api from '../../services/api';
import { numberFormat } from '../../utils/formatter';
import { Container, Label, LabelContainer, ListItemContainer, Name, StyledText } from './styles';

export type Stock = {
  id: string;
  name: string;
  percentual: number;
  value: number;
};

export type Investment = {
  name: string;
  description: string;
  total: number;
  enabled: boolean;
  stocks: Stock[];
};

const Investments = () => {
  const navigation = useNavigation<NativeStackNavigationProp<InvestmentParamList>>();

  const [loading, setLoading] = useState(true);
  const [investments, setInvestments] = useState<Investment[]>([]);

  const parseInvestments = (investments: any[]) => {
    return investments.map((investment: any): Investment => {
      const stocks = investment.acoes.map((stock: any): Stock => {
        return {
          id: stock.id,
          name: stock.nome.match(/\((.*)\)/)[1],
          percentual: stock.perceltual,
          value: parseFloat(((investment.saldoTotal * stock.percentual) / 100).toFixed(2)),
        };
      });
      return {
        name: investment.nome,
        description: investment.objetivo,
        total: investment.saldoTotal,
        enabled: investment.indicadorCarencia === 'N',
        stocks: stocks,
      };
    });
  };

  const fetchInvestments = async () => {
    try {
      const { data } = await api.get('/ca4ec77d-b941-4477-8a7f-95d4daf7a653');
      const investmentsData = parseInvestments(data.response.data.listaInvestimentos);

      setInvestments(investmentsData);
    } catch (e) {
      console.log(e);
      Alert.alert('Erro ao listar investimentos!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  const handlePress = (investment: Investment) => {
    navigation.navigate('Resgate', { investment });
  };

  return (
    <Container>
      {loading ? (
        <Load />
      ) : (
        <View>
          <LabelContainer>
            <Label>Investimentos</Label>
            <Label>R$</Label>
          </LabelContainer>
          <ScrollView>
            {investments.map((item: Investment, index) => (
              <TouchableOpacity
                key={index}
                disabled={!item.enabled}
                activeOpacity={1}
                onPress={() => {
                  if (item.enabled) handlePress(item);
                }}>
                <ListItemContainer disabled={!item.enabled}>
                  <View>
                    <Name>{item.name}</Name>
                    <Text>{item.description}</Text>
                  </View>
                  <StyledText>{numberFormat(item.total)}</StyledText>
                </ListItemContainer>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </Container>
  );
};

export default Investments;
