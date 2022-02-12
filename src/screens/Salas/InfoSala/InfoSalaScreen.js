import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import React from 'react';
import {styles} from './styles';

export default function InfoSalaScreen({sala}) {
  const {name, description, createdBy, messages, date} = sala.sala;

  const arrayMensajes = Object.values(messages);

  return (
    <View style={styleContainer}>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>Creador: {createdBy}</Text>
      <Text style={styles.text}>Mensajes: {arrayMensajes.length}</Text>
      <Text style={styles.text}>Fecha: {date}</Text>

      <BtnCustom text="Eliminar sala" color={colors.red} />
    </View>
  );
}
