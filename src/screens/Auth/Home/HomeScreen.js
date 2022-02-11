import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={styleContainer}>
      <Text style={{fontSize: 20, color: colors.light, textAlign: 'center'}}>
        Bienvenido a msnapp
      </Text>

      <BtnCustom
        text="Registrarse"
        color={colors.purple}
        onPress={() => navigation.navigate('CrearUserScreen')}
      />

      <BtnCustom
        text="Iniciar sesion"
        color={colors.lightGrey}
        onPress={() => navigation.navigate('IniciarSesionScreen')}
      />
    </View>
  );
}
