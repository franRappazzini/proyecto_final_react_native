import {ImageBackground, Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useSelector} from 'react-redux';

import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import React from 'react';
import {styles} from './styles';

export default function MensajeDetallesScreen({route, navigation}) {
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
      <ImageBackground
        source={require('../../../assets/img/background-chat.jpg')}
        style={verificarMensaje()}>
        <MensajeChat mensaje={message} username={username} hora={hour} />
      </ImageBackground>

      <View style={styles.datosMensaje}>
        <Text>Enviado por: {username}</Text>
        <Text>
          Fecha: {day}, {hour}
        </Text>
      </View>
    </View>
  );
}
