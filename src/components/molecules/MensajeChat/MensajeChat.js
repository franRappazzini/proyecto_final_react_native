import {Pressable, Text} from 'react-native';

import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function MensajeChat({
  mensaje,
  hora,
  username,
  onPress,
  onLongPress,
}) {
  const usuario = useSelector(state => state.user.user);

  function verificarMensaje() {
    if (usuario.username === username) {
      return styles.miMensajeContainer;
    } else {
      return styles.mensajeContainer;
    }
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [{opacity: pressed ? 0.6 : 1}, verificarMensaje()]}>
      <Text style={styles.mensajeText}>{mensaje}</Text>
      <Text style={styles.horaText}>{hora}</Text>
    </Pressable>
  );
}
