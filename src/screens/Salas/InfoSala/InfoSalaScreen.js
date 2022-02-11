import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import React from 'react';
import {styles} from './styles';

export default function InfoSalaScreen() {
  return (
    <View style={styleContainer}>
      <Text style={styles.text}>NOMBRE DE SALA</Text>
      <Text style={styles.text}>Dscripcion de sala</Text>
      <Text style={styles.text}>Creador: username</Text>
      <Text style={styles.text}>Mensajes: 10</Text>
      <Text style={styles.text}>Fecha: 11/02/2022</Text>

      <BtnCustom text="Eliminar sala" color={colors.red} />
    </View>
  );
}
