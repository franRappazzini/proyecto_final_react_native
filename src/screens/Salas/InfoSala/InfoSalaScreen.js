import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function InfoSalaScreen() {
  const uniqueSala = useSelector(state => state.sala.uniqueSala);

  const arrayMensajes = uniqueSala.messages
    ? Object.values(uniqueSala.messages)
    : [];

  return (
    <View style={styleContainer}>
      <Text style={styles.text}>{uniqueSala.name.toUpperCase()}</Text>
      <Text style={styles.text}>{uniqueSala.description}</Text>
      <Text style={styles.text}>Creador: {uniqueSala.createdBy}</Text>
      <Text style={styles.text}>Mensajes: {arrayMensajes.length}</Text>
      <Text style={styles.text}>Fecha: {uniqueSala.date}</Text>

      <View style={styles.iconContainer}>
        <Ionicons name="trash-outline" color={colors.red} size={30} />
      </View>
    </View>
  );
}
