import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {styles} from './styles';

export default function CrearSalaScreen() {
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () => setSwitchEnabled(!switchEnabled);

  return (
    <View style={styleContainer}>
      <TextLabel text="Nombre de sala" />
      <TextInputCustom placeholder="Nombre" />

      <TextLabel text="Descripción" />
      <TextInputCustom placeholder="Descripción" />

      <View style={styles.switchContainer}>
        <Switch
          trackColor={{false: colors.lightGrey, true: colors.purple}}
          thumbColor={switchEnabled ? colors.lightGrey : colors.light}
          onValueChange={toggleSwitch}
          value={switchEnabled}
        />

        <Text style={styles.textSwtich}>Publica</Text>
      </View>

      <TextLabel text="Contraseña" />
      <TextInputCustom placeholder="Contraseña" type="visible-password" />

      <View style={styles.crearSalaContainer}>
        <BtnCustom text="Crear sala" color={colors.purple} />
      </View>
    </View>
  );
}
