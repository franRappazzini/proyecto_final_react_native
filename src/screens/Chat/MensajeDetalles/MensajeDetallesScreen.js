import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function MensajeDetallesScreen({route}) {
  const user = useSelector(state => state.user.user);
  const {
    mensaje: {message, username, hour, day},
  } = route.params;

  function verificarMensaje() {
    if (user.username === username) {
      return styles.miMensajeContainer;
    } else {
      return styles.mensajeContainer;
    }
  }

  return (
    <View style={styleContainer}>
      <View style={verificarMensaje()}>
        {user.username === username && (
          <Ionicons name="trash-outline" size={30} color={colors.red} />
        )}
        <MensajeChat mensaje={message} username={username} hora={hour} />
      </View>

      <Text>Enviado por: {username}</Text>
      <Text>
        Fecha: {day}, {hour}
      </Text>
    </View>
  );
}
