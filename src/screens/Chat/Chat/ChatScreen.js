import {FlatList, KeyboardAvoidingView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  createMensaje,
  getMensajes,
} from '../../../redux/actions/MensajesActions';

import InputEnviarMensaje from '../../../components/molecules/InputEnviarMensaje/InputEnviarMensaje';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import {fecha} from '../../../utils/functions/functions';
import {styleContainer} from '../../../utils/constants/themes';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function ChatScreen({route, navigation}) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const user = useSelector(state => state.user.user);
  const mensajes = useSelector(state => state.mensajes);
  const {id, username} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensajes(user.id, username));
  }, [dispatch, user.id, username]);

  function enviarMensaje() {
    if (nuevoMensaje.trim() !== '') {
      const mensaje = {
        message: nuevoMensaje.trim(),
        user: user.username,
        day: fecha().day,
        hour: fecha().hour,
      };

      console.warn(mensaje.username);

      dispatch(createMensaje(user.id, username, mensaje));
      dispatch(createMensaje(id, user.username, mensaje));
      setNuevoMensaje('');
    }
  }

  return (
    <KeyboardAvoidingView style={styleContainer}>
      {mensajes && mensajes.length > 0 && (
        <FlatList
          data={mensajes}
          renderItem={({item}) => (
            <MensajeChat
              mensaje={item.message}
              hora={item.hour}
              username={item.username}
              onLongPress={() => navigation.navigate('MensajeDetallesScreen')}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}

      <InputEnviarMensaje
        value={nuevoMensaje.trimStart()}
        onChangeText={setNuevoMensaje}
        onPress={enviarMensaje}
      />
    </KeyboardAvoidingView>
  );
}
