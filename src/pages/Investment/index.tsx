import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import { Container, Label, LabelContainer } from './styles';

const Investment = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate('Resgate');
  };

  return (
    <Container>
      <LabelContainer>
        <Label>Investimentos</Label>
        <Label>R$</Label>
      </LabelContainer>

      <ScrollView>
        {[...Array(5)].map((x, i) => (
          <ListItem
            key={i}
            name="Investimento I"
            description="Minha aposentadoria"
            value={75100}
            onPress={handlePress}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Investment;
