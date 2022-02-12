import {FlatList, KeyboardAvoidingView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  createMensajeSala,
  getMensajesSala,
} from '../../../redux/actions/SalaAction';
import {useDispatch, useSelector} from 'react-redux';

import InputEnviarMensaje from '../../../components/molecules/InputEnviarMensaje/InputEnviarMensaje';
import MensajeSala from '../../../components/molecules/MensajeSala/MensajeSala';
import {fecha} from '../../../utils/functions/functions';
import {styleContainer} from '../../../utils/constants/themes';

export default function SalaScreen({sala, navigation}) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const user = useSelector(state => state.user.user);
  const mensajes = useSelector(state => state.sala.mensajes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensajesSala(sala.sala.id));
  }, [dispatch, sala.sala.id]);

  function enviarMensaje() {
    if (nuevoMensaje.trim() !== '') {
      dispatch(
        createMensajeSala(sala.sala.id, {
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
    <KeyboardAvoidingView style={styleContainer}>
      {mensajes && mensajes.length > 0 && (
        <FlatList
          data={mensajes}
          renderItem={({item}) => (
            <MensajeSala
              mensaje={item}
              onLongPress={() =>
                navigation.navigate('MensajeDetalleSalaScreen')
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
  );
}
