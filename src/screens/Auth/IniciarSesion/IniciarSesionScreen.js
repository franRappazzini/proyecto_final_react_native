import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import React from 'react';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {styles} from './styles';

export default function IniciarSesionScreen({navigation}) {
  return (
    <View style={styleContainer}>
      <Text>Bienvenido nuevamente! 😎</Text>

      <View style={styles.inputsContainer}>
        <TextLabel text="Username o email" />
        <TextInputCustom placeholder="Usuario o email" />

        <TextLabel text="Contraseña" />
        <TextInputCustom placeholder="Contraseña" type="visible-password" />
      </View>

      <BtnCustom
        text="Iniciar sesion"
        color={colors.purple}
        onPress={() => navigation.navigate('Tab')}
      />
    </View>
  );
}
