import {Text, View} from 'react-native';

import InputEnviarMensaje from '../../../components/molecules/InputEnviarMensaje/InputEnviarMensaje';
import MensajeChat from '../../../components/molecules/MensajeChat/MensajeChat';
import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';

export default function ChatScreen({navigation}) {
  return (
    <View style={styleContainer}>
      <MensajeChat
        mensaje="Mensaje"
        onLongPress={() => navigation.navigate('MensajeDetallesScreen')}
      />
      <MensajeChat mensaje="Mensaje" />

      <InputEnviarMensaje />
    </View>
  );
}
