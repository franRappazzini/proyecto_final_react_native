import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import MensajeSala from '../../../components/molecules/MensajeSala/MensajeSala';
import React from 'react';
import {styles} from '../../Chat/MensajeDetalles/styles';

export default function MensajeDetallesSalaScreen() {
  return (
    <View style={styleContainer}>
      <View style={styles.mensajeContainer}>
        <MensajeSala />
      </View>

      <Text>Enviado por: username</Text>
      <Text>Sala: Nombre de sala</Text>
      <Text>Fecha: 10/02/2022, 16:58hs</Text>

      <View style={styles.btnEliminarContainer}>
        <BtnCustom text="Eliminar mensaje" color={colors.red} />
      </View>
    </View>
  );
}
