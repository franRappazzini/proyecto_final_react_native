import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import React from 'react';
import {styles} from './styles';

export default function MensajeDetallesScreen() {
  return (
    <View style={styleContainer}>
      <View style={styles.mensajeContainer}>
        <MensajeChat mensaje="Mensaje" />
      </View>

      <Text>Enviado por: username</Text>
      <Text>Fecha: 10/02/2022, 16:58hs</Text>

      <View style={styles.btnEliminarContainer}>
        <BtnCustom text="Eliminar mensaje" color={colors.red} />
      </View>
    </View>
  );
}
