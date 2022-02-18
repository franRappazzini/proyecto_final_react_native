import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {
  createMensajeSala,
  getMensajesSala,
} from '../../../redux/actions/SalaAction';
import {useDispatch, useSelector} from 'react-redux';

import InputEnviarMensaje from '../../../components/molecules/InputEnviarMensaje/InputEnviarMensaje';
import MensajeSala from '../../../components/molecules/MensajeSala/MensajeSala';
import {fecha} from '../../../utils/functions/functions';
import {styles} from './styles';

export default function SalaScreen({navigation}) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const user = useSelector(state => state.user.user);
  const mensajes = useSelector(state => state.sala.mensajes);
  const uniqueSala = useSelector(state => state.sala.uniqueSala);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensajesSala(uniqueSala.id));
  }, [dispatch, uniqueSala]);

  function enviarMensaje() {
    if (nuevoMensaje.trim() !== '') {
      dispatch(
        createMensajeSala(uniqueSala.id, {
          message: nuevoMensaje.trim(),
          username: user.username,
          day: fecha().day,
          hour: fecha().hour,
        }),
      );
      setNuevoMensaje('');
    }
  }

  return (
    <ImageBackground
      source={require('../../../assets/img/background-chat.jpg')}>
      <KeyboardAvoidingView style={styles.salaContainer}>
        {mensajes && mensajes.length < 1 && (
          <ActivityIndicator size="large" color={colors.purple} />
        )}

        {!mensajes && <Text>No hay mensajes</Text>}

        {mensajes && mensajes.length > 0 && (
          <FlatList
            data={mensajes}
            renderItem={({item}) => (
              <MensajeSala
                mensaje={item}
                onLongPress={() =>
                  navigation.navigate('MensajeDetalleSalaScreen', {
                    mensaje: item,
                  })
                }
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
    </ImageBackground>
  );
}
