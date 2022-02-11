import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import React from 'react';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {styles} from './styles';

export default function CrearUserScreen() {
  return (
    <View style={styleContainer}>
      <Text style={{fontSize: 20, color: colors.light, textAlign: 'center'}}>
        Complete todos los campos
      </Text>

      <View style={styles.inputsContainer}>
        <TextLabel text="Nombre" />
        <TextInputCustom placeholder="Nombre" />

        <TextLabel text="Apellido" />
        <TextInputCustom placeholder="Apellido" />

        <TextLabel text="Username" />
        <TextInputCustom placeholder="Username" autoCapitalize="none" />

        <TextLabel text="Email" />
        <TextInputCustom
          placeholder="Email"
          autoCapitalize="none"
          type="email-address"
        />

        <TextLabel text="Contraseña" />
        <TextInputCustom
          placeholder="Contraseña (no use una contraseña ya utilizada antes)"
          autoCapitalize="none"
          type="visible-password"
        />
      </View>

      <BtnCustom text="Registrarse" color={colors.purple} />
    </View>
  );
}
