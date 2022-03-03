import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  createMensaje,
  getMensajes,
} from '../../../redux/actions/MensajesActions';

import InputEnviarMensaje from '../../../components/molecules/InputEnviarMensaje/InputEnviarMensaje';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import {fecha} from '../../../utils/functions/functions';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function ChatScreen({navigation}) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const user = useSelector(state => state.user.user);
  const mensajes = useSelector(state => state.mensajes);
  const userChat = useSelector(state => state.user.userChat);
  const dispatch = useDispatch();
  const flatList = useRef(null);

  useEffect(() => {
    dispatch(getMensajes(user.id, userChat.username));
  }, [dispatch, user.id, userChat.username]);

  function enviarMensaje() {
    if (nuevoMensaje.trim() !== '') {
      const mensaje = {
        message: nuevoMensaje.trim(),
        user: user.username,
        day: fecha().day,
        hour: fecha().hour,
      };

      dispatch(createMensaje(user.id, userChat.username, mensaje));
      dispatch(createMensaje(userChat.id, user.username, mensaje));
      setNuevoMensaje('');
    }
  }

  return (
    <ImageBackground
      source={require('../../../assets/img/background-chat.jpg')}>
      <KeyboardAvoidingView style={styles.chatContainer}>
        {mensajes && mensajes.length > 0 ? (
          <FlatList
            data={mensajes}
            renderItem={({item}) => (
              <MensajeChat
                mensaje={item.message}
                hora={item.hour}
                username={item.username}
                onLongPress={() =>
                  navigation.navigate('MensajeDetallesScreen', {mensaje: item})
                }
              />
            )}
            keyExtractor={item => item.id}
            ref={flatList}
            onContentSizeChange={() => flatList.current.scrollToEnd()}
          />
        ) : (
          <Text style={styles.textNoMensajes}>Aun no tienes mensajes</Text>
        )}

        <InputEnviarMensaje
          value={nuevoMensaje.trimStart()}
          onChangeText={setNuevoMensaje}
          onPress={enviarMensaje}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
