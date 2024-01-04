import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { UserContext } from '../contexts/userContext';

type UserScreenProp = {
  route: RouteProp<RootStackParamList, 'User'>;
};

export default function UserScreen({ route }: UserScreenProp) {
  const { userName } = route.params;
  const UserContextValue = useContext(UserContext);
  const name = UserContextValue?.nome || 'Nenhum nome encontrado';

  return (
    <View>
      <Text>Bem vindo: {userName}</Text>
      <Text>Nome do contexto: {name}</Text>
    </View>
  );
}
