import {Image, Pressable, Text, View} from 'react-native';

import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function ChatList({chats, onPress}) {
  const user = useSelector(state => state.user.user);
  const chat = Object.values(chats);

  // tomo el nombre del usuario que selecciono para ir al chat y lo saco del array
  const userChat = chat.pop();

  const ultimoMensaje = chat[chat.length - 1];

  function verificarMensaje() {
    // verifica si el ultimo mensaje es propio
    if (ultimoMensaje.username === user.username) {
      return 'Tu: ';
    }
  }

  return (
    <Pressable
      onPress={() => onPress(userChat)}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: pressed ? colors.darkGrey : 'transparent',
        },
        styles.chatListContainer,
      ]}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://icdn.dtcn.com/image/digitaltrends_es/bored-ape-yacht-club-720x720.jpg',
        }}
      />

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.usernameText}>{userChat}</Text>
          <Text style={styles.mensajeText}>
            {verificarMensaje()}
            {ultimoMensaje.message}
          </Text>
        </View>

        <Text style={styles.fechaText}>
          {ultimoMensaje.day}, {ultimoMensaje.hour}
        </Text>
      </View>
    </Pressable>
  );
}
