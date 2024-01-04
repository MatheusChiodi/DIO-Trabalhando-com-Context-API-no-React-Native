import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

import { UserContext } from '../contexts/userContext';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [name, setName] = useState('');
  const userContext = useContext(UserContext);

  const navigateToUserScreen = () => {
    userContext?.saveLoginUserToCache(name);
    navigation.navigate('User', { userName: name });
  };

  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button title="Ir para tela de usuário" onPress={navigateToUserScreen} />
    </View>
  );
}
