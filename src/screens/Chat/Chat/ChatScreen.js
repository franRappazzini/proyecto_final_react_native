import React, {useState} from 'react';

import InputEnviarMensaje from '../../../components/molecules/InputEnviarMensaje/InputEnviarMensaje';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import {View} from 'react-native';
import {createMensaje} from '../../../redux/actions/MensajesActions';
import {fecha} from '../../../utils/functions/functions';
import {styleContainer} from '../../../utils/constants/themes';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function ChatScreen({route, navigation}) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const user = useSelector(state => state.user.user);
  const {id, username} = route.params;
  const dispatch = useDispatch();

  function enviarMensaje() {
    if (nuevoMensaje.trim() !== '') {
      const mensaje = {
        message: nuevoMensaje.trim(),
        username: user.username,
        day: fecha().day,
        hour: fecha().hour,
      };

      console.warn(mensaje.username);

      dispatch(createMensaje(user.id, username, mensaje));
      dispatch(createMensaje(id, user.username, mensaje));
      // setNuevoMensaje('');
    }
  }
  return (
    <View style={styleContainer}>
      <MensajeChat
        mensaje="Mensaje"
        onLongPress={() => navigation.navigate('MensajeDetallesScreen')}
      />
      <MensajeChat mensaje="Mensaje" />

      <InputEnviarMensaje
        value={nuevoMensaje.trimStart()}
        onChangeText={setNuevoMensaje}
        onPress={enviarMensaje}
      />
    </View>
  );
}
