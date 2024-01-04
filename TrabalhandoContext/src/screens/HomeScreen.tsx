import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [name, setName] = useState('');

  const navigateToUserScreen = () => {
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
