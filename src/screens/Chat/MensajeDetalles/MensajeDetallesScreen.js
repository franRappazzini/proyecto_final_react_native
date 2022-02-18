import {ImageBackground, Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import React from 'react';
import {styles} from './styles';

// import {deleteMensaje} from '../../../redux/actions/MensajesActions';

export default function MensajeDetallesScreen({route, navigation}) {
  const user = useSelector(state => state.user.user);
  // const userChat = useSelector(state => state.user.userChat);
  const {
    mensaje: {id, message, username, hour, day},
  } = route.params;
  // const dispatch = useDispatch();

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
        {user.username === username && (
          <Ionicons
            name="trash-outline"
            size={30}
            color={colors.red}
            // onPress={() => {
            //   dispatch(deleteMensaje(user.id, userChat.username, id));
            //   dispatch(deleteMensaje(userChat.id, user.username, id));
            //   // navigation.goBack();
            // }}
          />
        )}
        <MensajeChat mensaje={message} username={username} hora={hour} />
      </ImageBackground>

      <Text>Enviado por: {username}</Text>
      <Text>
        Fecha: {day}, {hour}
      </Text>
    </View>
  );
}
