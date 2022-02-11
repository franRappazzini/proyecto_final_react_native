import React from 'react';
import Usuarios from '../../../components/molecules/Usuarios/Usuarios';
import {View} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';

export default function UsuariosListScreen({navigation}) {
  return (
    <View style={styleContainer}>
      <Usuarios
        onPress={() => navigation.navigate('ChatNav')}
        navigation={() => navigation.navigate('InfoUsuariosNav')}
      />
      <Usuarios />
      <Usuarios />
      <Usuarios />
      <Usuarios />
      <Usuarios />
      <Usuarios />
    </View>
  );
}
